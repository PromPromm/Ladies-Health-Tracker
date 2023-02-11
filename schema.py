from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    fullname = fields.Str(required=True)
    email = fields.Str(required=True)
    date_of_birth = fields.Date(required=True)
    password = fields.Str(required=True, load_only=True)
    is_admin = fields.Boolean(dump_only=True)

class UserLoginSchema(Schema):
    email = fields.Str(required=True)
    password = fields.Str(required=True)
