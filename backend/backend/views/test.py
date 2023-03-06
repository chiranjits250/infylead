from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.utils.email_templates import send_reset_password_verify_email, send_sign_up_verify_email
from backend.views.auth import create_authenticate_success_response


@api_view(['GET'])
def test(request):    
    return create_authenticate_success_response(1)
