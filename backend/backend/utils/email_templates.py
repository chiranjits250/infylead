from backend.utils.send_email import send_email
from django.conf import settings
from greatawesomeutils.lang import *
from django.conf import settings

def create_reset_password_link(token):
    return f'{settings.APP_URL}/auth/reset-password-verify/{token}/'


def send_reset_password_verify_email(token, to_email):
    link = create_reset_password_link(token)
    send_email('Reset Password Verification Email',
               'mail_reset_password_verify.html', {'link': link}, to_email)


def send_data_email(subject , data):
    send_email(subject,
               'mail_generic.html', {"data": json.dumps(data, indent=4) }, settings.MAIL_RECIEVER_EMAIL)

def send_generic_email(subject, content):
    send_email(subject,
               'mail_generic.html', {"data": json.dumps(content, indent=4) }, settings.MAIL_RECIEVER_EMAIL)


def send_buy_subscription_interest_contact_email(data):
    send_email('Subscription Interest',
               'mail_generic.html', {"data": json.dumps(data, indent=4) }, settings.MAIL_RECIEVER_EMAIL)

def send_contact_us_email(data):
    send_email('Contact Us Form',
               'mail_generic.html', {"data": json.dumps(data, indent=4) }, settings.MAIL_RECIEVER_EMAIL)

def send_suggested_feautre_email(data):
    send_email('Suggested Feautre Form',
               'mail_suggested_feautre.html', data, settings.MAIL_RECIEVER_EMAIL)


def send_exception_email(data):
    send_email('Exception',
               'mail_generic.html', {"data": json.dumps(data, indent=4) }, settings.MAIL_RECIEVER_EMAIL)

def create_sign_up_verify_link(token):
    return f'{settings.APP_URL}/backend/auth/sign-up-email-verify/{token}/'


def send_sign_up_verify_email(token, to_email):
    link = create_sign_up_verify_link(token)
    send_email('Sign Up Verification Email',
               'mail_sign_up_verify.html', {'link': link}, to_email)
