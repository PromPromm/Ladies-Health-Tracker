from flask import Flask, jsonify
from flask_smorest import Api
from config import config_dict
from auth import auth_blueprint
from utils.db import db
from flask_migrate import Migrate
import models
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager


def create_app(config=config_dict['dev']):
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)
    
    migrate = Migrate(app, db)

    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.config['API_TITLE'] = 'Stores REST API'
    app.config['API_VERSION'] = 'v1'
    app.config['OPENAPI_VERSION'] = '3.0.3'
    app.config['OPENAPI_URL_PREFIX'] = '/'
    app.config['OPENAPI_SWAGGER_UI_PATH'] = '/swagger-ui'
    app.config['OPENAPI_SWAGGER_UI_URL'] = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'

    api = Api(app)


    bcrypt = Bcrypt(app)

    jwt = JWTManager(app)

    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
        jti = jwt_payload["jti"]
        token = models.TokenBlocklist.query.filter_by(jti=jti).first()
        return token is not None
        
    @jwt.additional_claims_loader
    def add_claim_to_jwt(identity):
        if identity == 4:
            return {"app_admin": True}
        return {"app_admin": False}

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return (
            jsonify(
                {
                    "message": "The token has expired",
                    "error": "token_expired"
                }
            ), 401
        )

    @jwt.needs_fresh_token_loader
    def token_not_fresh_callback(jwt_header, jwt_payload):
        return jsonify(
            {
                "description": "The token is not fresh",
                "error": "fresh_token_required"
            }
        ), 401

    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return (
            jsonify(
                {
                    "message": "Signature verification failed",
                    "error": "invalid_token"
                }
            ), 401
        )


    @jwt.unauthorized_loader
    def missing_token_callback(error):
        return (
            jsonify(
                {
                    "description": "Request does not contain an access token",
                    "error": "authorization_required"
                }
            ), 401
        )

   
    api.register_blueprint(auth_blueprint)

    return app
