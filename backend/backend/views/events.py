from backend.views.auth import get_first_name
from backend.models import *
from backend.serializers import *
from rest_framework.viewsets import ModelViewSet
from backend.utils.email_templates import *
from backend.permissions import IsAdmin, IsAuthenticated

ONLY_POST_METHOD = ['post', 'head', 'options']

def getfname(x):
    name = x.get('name')
    if name is not None:
        return get_first_name(name)
    
    return x.get('first_name')

class BuySubscriptionInterestContactEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = BuySubscriptionInterestContactEventSerializer
    queryset = BuySubscriptionInterestContactEvent.objects.all()
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user_data = UserSerializer(User.objects.get(id=self.request.user_id)).data
        result = merge_dicts_in_one_dict([user_data])
        send_on_contact_us(getfname(result), result.get('email'))
        send_buy_subscription_interest_contact_email(result)
        serializer.save()

class ContactEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = NewContactEventSerializer
    queryset = NewContactEvent.objects.all()

    def perform_create(self, serializer):
        
        result = serializer.validated_data['data']
        send_contact_us_email(result)
        send_on_contact_us(getfname(result), result.get('email'))

        serializer.save()

class SuggestedFeautreEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = SuggestedFeautreEventSerializer
    queryset = SuggestedFeautreEvent.objects.all()

    def perform_create(self, serializer):
        result = serializer.validated_data
        send_suggested_feautre_email(result)
        send_on_contact_us(getfname(result), result.get('email'))
        serializer.save()

class VisitEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = VisitEventSerializer
    queryset = VisitEvent.objects.all()

class ExceptionEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = ExceptionEventSerializer
    queryset = ExceptionEvent.objects.all()

    def perform_create(self, serializer):
        send_exception_email(serializer.validated_data)
        serializer.save()
        
class TimeSpentEventViewSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = TimeSpentEventSerializer
    queryset = TimeSpentEvent.objects.all()

class SearchViewEventSet(ModelViewSet):
    http_method_names = ONLY_POST_METHOD
    serializer_class = SearchEventSerializer
    queryset = SearchEvent.objects.all()

    

