from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')




def check_password_length(form,field):
    password = field.data
    if len(password) < 8:
        raise ValidationError('Password must be at least 8 characters')
    elif len(password) > 16:
        raise ValidationError("Password cannot be more than 16 characters")




class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[
                           DataRequired(), check_password_length])
