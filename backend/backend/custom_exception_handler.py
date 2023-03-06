import traceback
from backend.models import User
from backend.validators import normalize_django_errors
from backend.validators import errors_dict_to_string
from rest_framework.views import exception_handler
from rest_framework import exceptions
from rest_framework import status
from rest_framework.response import Response

vague_message = 'Something went wrong, please try again later.'


class VagueException(exceptions.ValidationError):
    default_detail = (vague_message)


class CustomException(exceptions.ValidationError):
    message = None

    def __init__(self, message=vague_message, status_code=status.HTTP_400_BAD_REQUEST):
        self.message = message
        super().__init__(None, None)
        self.status_code = status_code


def custom_exception_handler(exc, context):
    print(exc)
    print(traceback.format_exc())
    response = exception_handler(exc, context)

    if isinstance(exc, User.DoesNotExist):
        return Response({"message": 'You have been Deleted'}, status=status.HTTP_404_NOT_FOUND)

    if response is not None:
        if isinstance(exc,  exceptions.NotAuthenticated):
            response.data = {'redirect': '/auth/sign-in/'}
        elif isinstance(exc,  CustomException):
            response.data = {"message": exc.message}
        elif isinstance(exc,  VagueException):
            response.data = {"message": vague_message}
        elif isinstance(exc,  exceptions.ValidationError):
            response.data = {"message": errors_dict_to_string(
                normalize_django_errors(response.data))}
        else:
            if 'detail' in response.data:
                response.data['message'] = response.data['detail']
                del response.data['detail']
    return response
