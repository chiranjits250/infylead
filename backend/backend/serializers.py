from rest_framework import serializers
from backend.models import *


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['auth_method', 'password']


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email_views_limit",
                  "phone_views_limit",  "record_exports_limit", "is_banned","show_all_pages"]

class UpdateOnboardingUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["has_on_boarded","company_name","phone_number","country"]

class SignInSerializer(serializers.Serializer):
    email = serializers.EmailField()

class BuySubscriptionInterestContactEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuySubscriptionInterestContactEvent
        exclude = ['id']

class ContactEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactEvent
        exclude = ['id']


class NewContactEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewContactEvent
        exclude = ['id']



class SuggestedFeautreEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuggestedFeautreEvent
        exclude = ['id']


class VisitEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitEvent
        exclude = ['id']


class ExceptionEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExceptionEvent
        exclude = ['id']


class TimeSpentEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSpentEvent
        exclude = ['id']


class SearchEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchEvent
        exclude = ['id']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = '__all__'