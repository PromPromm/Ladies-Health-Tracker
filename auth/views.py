from flask_smorest import Blueprint
from flask import abort, jsonify
from flask.views import MethodView
from schema import UserSchema, UserLoginSchema
from models import User, TokenBlocklist
from flask_bcrypt import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
from http import HTTPStatus
from utils.db import db
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt, get_jwt_identity
from datetime import datetime, timezone

auth_blueprint = Blueprint('users', __name__, description='Operations on users')

@auth_blueprint.route('/login')
class Login(MethodView):
    @auth_blueprint.arguments(UserLoginSchema)
    def post(self, user_data):
            user = User.query.filter_by(email=user_data['email']).first()

            if user and check_password_hash(user.password, user_data['password']):
                access_token = create_access_token(identity=user.id, fresh=True)
                refresh_token = create_refresh_token(identity=user.id)
                return {"access_token": access_token, "refresh_token": refresh_token}, HTTPStatus.OK
            return {"message": "Invalid Credentials"}, HTTPStatus.UNAUTHORIZED


@auth_blueprint.route('/signup')
class SignUp(MethodView):
    @auth_blueprint.arguments(UserSchema)
    def post(self, user_data):
        try:
            new_user = User(fullname=user_data['fullname'],
            email=user_data['email'],
            date_of_birth=user_data['date_of_birth'],
            password=generate_password_hash(user_data['password']).decode('utf-8')
            )
            db.session.add(new_user)
            db.session.commit()

            return {"message": "User successfully created"}, HTTPStatus.CREATED
        except IntegrityError:
            return {"message": "User with that email already exists"}, HTTPStatus.BAD_REQUEST
        

@auth_blueprint.route('/logout')
class Logout(MethodView):
    @jwt_required(fresh=True)
    def delete(self):
        jti = get_jwt()["jti"]
        token = TokenBlocklist(jti=jti, created_at=datetime.now(timezone.utc))
        db.session.add(token)
        db.session.commit()
        return {"message": "User successfully logged out"}


@auth_blueprint.route('/refresh')
class TokenRefresh(MethodView):
    @jwt_required(refresh=True)
    def post(self):
        current_user = get_jwt_identity()
        new_token = create_access_token(identity=current_user, fresh=False)
        return {"access_token": new_token}

@auth_blueprint.route('/user/<int:user_id>')
class UserModel(MethodView):
    @auth_blueprint.response(200, UserSchema)
    def get(self, user_id):
        user = User.query.get_or_404(user_id)
        return user

    @jwt_required()
    def delete(self, user_id):
        jwt = get_jwt_identity()
        admin = User.query.get_or_404(jwt)
        if admin.is_admin is True:
            user = User.query.get_or_404(user_id)
            db.session.delete(user)
            db.session.commit()
            return {"message": "User deleted"}, HTTPStatus.ACCEPTED
        return {"message": "Not allowed"}, HTTPStatus.FORBIDDEN

    @jwt_required()
    def patch(self, user_id):
        """
        Give admin privileges to user
        """
        jwt = get_jwt()
        if not jwt.get("app_admin"):
            abort(401, "Admin privilege only")
        user = User.query.get_or_404(user_id)
        user.make_admin()
        return {"message":"User is now an admin"}
