import os
from django.conf import settings
from django.http import HttpResponse, Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def get_company(request, id):
    return Response({"name": id})
