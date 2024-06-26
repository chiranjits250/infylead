
import os
from pathlib import Path
import socket
from dotenv import load_dotenv

INTERNAL_IPS = ["127.0.0.1"]
ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = True

INSTALLED_APPS = [
    # 'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',

    # 'django.contrib.sessions',
    # 'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    "debug_toolbar",
    'backend'
]

MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'backend.middlewares.auth_middleware'
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'backend.custom_exception_handler.custom_exception_handler',
}


def is_gce_instance():
    try:
        socket.getaddrinfo('metadata.google.internal', 80)
    except socket.gaierror:
        return False
    return True


def is_in_kubernetes():
    return 'KUBERNETES_SERVICE_HOST' in os.environ


in_local = not is_in_kubernetes()
IN_LOCAL = in_local

in_skaffold = is_in_kubernetes() and not is_gce_instance()
in_prod = is_in_kubernetes() and is_gce_instance()
in_kubernetes = is_in_kubernetes()

if in_kubernetes:
    INFYLEAD_APP_URL = 'http://infylead-app-srv:4000'
else:
    INFYLEAD_APP_URL = 'http://localhost:4000'

BASE_DIR = Path(__file__).resolve().parent.parent.parent / 'app-data'

if in_local or in_skaffold:
    if in_local:
        load_dotenv('../dev.env')

    DEBUG = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_SECURE = True
    DEBUG = False
    DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': BASE_DIR / 'db.sqlite3',
            }
        }

    # This hides the browsable api
    REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [
        'rest_framework.renderers.JSONRenderer']

MAIL_SENDER_EMAIL =  'no-reply@infylead.com'
MAIL_RECIEVER_EMAIL =  'info@infylead.com'

SENDINBLUE_API_KEY =  os.environ['SENDINBLUE_API_KEY'] 
OAUTH_CLIENT_ID = os.environ['OAUTH_CLIENT_ID'] 
SECRET_KEY = os.environ['BACKEND_SECRET']

SECRET_ACCESS_TOKEN = os.environ['SECRET_ACCESS_TOKEN']
SECRET_REFRESH_TOKEN = os.environ['SECRET_REFRESH_TOKEN']

APP_URL = 'https://www.infylead.com'
DOMAIN_NAME = os.environ['DOMAIN_NAME']

EMAIL_BACKEND = 'django_ses.SESBackend'
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = 'infylead11111111111'
AWS_SES_REGION_NAME = 'us-east-2'
AWS_SES_REGION_ENDPOINT = 'email.us-east-2.amazonaws.com'
AWS_QUERYSTRING_AUTH = False
AWS_S3_REGION_NAME = 'us-east-2'
AWS_URL_PREFIX = 'https://infylead11111111111.s3.us-east-2.amazonaws.com/'

STATIC_URL = 'static/'
