from utils.db import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fullname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(40), nullable=False, unique=True)
    date_of_birth = db.Column(db.Date, nullable=False)
    password = db.Column(db.String, nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"User <{self.fullname}>"

    def make_admin(self):
        """
        Gives user admin privileges
        """
        self.is_admin = True
        db.session.commit()
