from backend.models import *
from backend.serializers import *
from rest_framework.viewsets import ModelViewSet
from backend.utils.data import ONLY_POST_METHOD
from backend.utils.email_templates import *

class SendEmailEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = SendEmailEventSerializer
    queryset = SendEmailEvent.objects.all()

    def perform_create(self, serializer):
        send_generic_email(
            serializer.validated_data['subject'], serializer.validated_data['content'])
        serializer.save()
