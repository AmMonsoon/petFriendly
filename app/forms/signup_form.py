from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

# def password_matches(form, field):
#     # Checking if password matches
#     password = field.data
#     email = form.data['email']
#     user = User.query.filter(User.email == email).first()
#     if not user:
#         raise ValidationError('No such user exists.')
#     if not user.check_password(password):
#         raise ValidationError('Password was incorrect.')

def check_password_length(form,field):
    password = field.data
    if len(password) < 8:
        raise ValidationError('Password must be at least 8 characters')
    elif len(password) > 16:
        raise ValidationError("Password cannot be more than 16 characters")


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    firstName = StringField(
        'firstName', validators=[DataRequired()])
    lastName = StringField(
        'lastName', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, Email('Please provide a valid email')])
    password = StringField('password', validators=[DataRequired(), check_password_length ])