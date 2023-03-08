from backend.models import *
from backend.pagination import DefaultPageNumberPagination
from backend.permissions import IsAdmin, IsAuthenticated
from backend.serializers import *
from rest_framework.viewsets import ModelViewSet
from backend.utils.email_templates import *
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from backend.utils.utils import download_csv_response

ONLY_GET_PATCH_DELETE = ['get', 'patch', 'delete', 'head', 'options']
ONLY_PATCH = ['patch', 'head', 'options']


class UserViewSet(ModelViewSet):
    http_method_names = ONLY_GET_PATCH_DELETE
    queryset = User.objects.all()
    pagination_class = DefaultPageNumberPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'email']
    permission_classes = [IsAuthenticated,  IsAdmin]
    

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        email_views_limit = request.data.get('email_views_limit', None)
        phone_views_limit = request.data.get('phone_views_limit', None)
        record_exports_limit = request.data.get('record_exports_limit', None)

        new_data = {}
        # check if the respective limit fields are being updated
        if email_views_limit is not None and email_views_limit != instance.email_views_limit:
            instance.email_views = 0
            new_data['email_views'] = 0
        if phone_views_limit is not None and phone_views_limit != instance.phone_views_limit:
            instance.phone_views = 0
            new_data['phone_views'] = 0
        if record_exports_limit is not None and record_exports_limit != instance.record_exports_limit:
            instance.record_exports = 0
            new_data['record_exports'] = 0
        serializer = self.get_serializer(instance, data=request.data, partial=kwargs.pop('partial', False))
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(merge_dicts_in_one_dict([serializer.data, new_data]))
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return UserSerializer
        elif self.request.method == 'PATCH':
            return UpdateUserSerializer




@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdmin])
def download(request):
    serializer = UserSerializer(User.objects.all(), many=True)
    result = serializer.data

    return download_csv_response(result, list(result[0].keys()))

class UserOnboardingViewSet(ModelViewSet):
    http_method_names = ONLY_PATCH
    serializer_class = UpdateOnboardingUserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user_id)
