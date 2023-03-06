from backend.models import *
from backend.pagination import DirectoryPageNumberPagination
from backend.permissions import IsAdmin, IsAuthenticated
from backend.serializers import *
from rest_framework.viewsets import ModelViewSet
from backend.utils.email_templates import *
from rest_framework import filters

ONLY_GET = ['get', 'head', 'options']


class CompanyViewSet(ModelViewSet):
    http_method_names = ONLY_GET
    queryset = Company.objects.all().order_by('id')
    pagination_class = DirectoryPageNumberPagination
    serializer_class = CompanySerializer


class PeopleViewSet(ModelViewSet):
    http_method_names = ONLY_GET
    queryset = People.objects.all().order_by('id')
    pagination_class = DirectoryPageNumberPagination
    serializer_class = PeopleSerializer

