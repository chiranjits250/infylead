from backend.shortcuts import bad_request, delete_cookie, set_cookie
from rest_framework import exceptions
from backend.utils.apollo import ApolloApi
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response
from django.http import HttpResponse
import csv
import io
from backend.utils.utils import download_csv_response
from greatawesomeutils.temp_email import TempMail

@api_view(['GET'])
def get_domains(request):
    return Response(TempMail.get_domains())

@api_view(['GET'])
def get_email(request):
    email = request.query_params['email']

    try:
        body = TempMail.get_body(email)
        return Response({"body": body})
    except AssertionError:
        return bad_request({"message": "No Email Found"})
    except Exception as e:
        raise e
