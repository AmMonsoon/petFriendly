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
def check_first_name_length(form,field):
    firstName = field.data
    if len(firstName) < 3:
        raise ValidationError('First name must be at least 4 characters')
    elif len(firstName) > 16:
        raise ValidationError("First name cannot be more than 16 characters")

def check_last_name_length(form,field):
    lastName = field.data
    if len(lastName) < 3:
        raise ValidationError('Last name must be at least 8 characters')
    elif len(lastName) > 16:
        raise ValidationError("Last name cannot be more than 16 characters")

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
        'firstName', validators=[DataRequired(), check_first_name_length])
    lastName = StringField(
        'lastName', validators=[DataRequired(), check_last_name_length])
    email = StringField('email', validators=[DataRequired(), user_exists, Email('Please provide a valid email')])
    password = StringField('password', validators=[DataRequired(), check_password_length ])