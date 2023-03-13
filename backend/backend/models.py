import datetime
from django.db import models
from django.utils import timezone
from backend.utils.hash_password import check_password


class Timestamps(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Token(Timestamps):
    token = models.CharField(max_length=100, unique=True)
    data = models.TextField()

    def is_expired(self):
        three_hours_from_creation = (
            self.created_at + datetime.timedelta(hours=3))

        return three_hours_from_creation < timezone.now()

    class Meta:
        abstract = True


class SignUpToken(Token):
    pass


class ResetPasswordToken(Token):
    pass


class User(Timestamps):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100,  blank=True)
    auth_method = models.CharField(max_length=20)
    email_auth_method = 'email'
    google_auth_method = 'google'

    email_views = models.PositiveIntegerField(default=0)
    email_views_limit = models.PositiveIntegerField(default=5)

    phone_views = models.PositiveIntegerField(default=0)
    phone_views_limit = models.PositiveIntegerField(default=5)

    record_exports = models.PositiveIntegerField(default=0)
    record_exports_limit = models.PositiveIntegerField(default=15)

    show_all_pages = models.BooleanField(default=False)

    is_banned = models.BooleanField(default=False)
    company_name = models.CharField(max_length=255, blank=True, default='')
    employee_size = models.CharField(max_length=255, blank=True, default='')
    phone_number = models.CharField(max_length=20, blank=True, default='')
    country = models.CharField(max_length=255, blank=True, default='')
    has_on_boarded = models.BooleanField(default=False)

    def check_password(self, plain_text_password):
        return check_password(plain_text_password, self.password)

    def has_paid(self):
        # todo implement
        return False


def delete_models_list(ls):
    for l in ls:
        l.delete()


class Search(Timestamps):
    type = models.CharField(max_length=255)
    keyword = models.CharField(max_length=255)
    data = models.JSONField()

    class Meta:
        unique_together = ('type', 'keyword',)

class SendEmailEvent(Timestamps):
    subject = models.CharField(max_length=255,  blank=True)
    content = models.JSONField()

class BuySubscriptionInterestContactEvent(Timestamps):
    pass

class ContactEvent(Timestamps):
    name = models.CharField(max_length=255,  blank=True)
    phone = models.CharField(max_length=20,  blank=True)
    message = models.TextField(blank=True)

class NewContactEvent(Timestamps):
    data = models.JSONField()

class SuggestedFeautreEvent(Timestamps):
    content = models.TextField(blank=True)


class VisitEvent(Timestamps):
    referrer = models.CharField(max_length=255,  blank=True)


class ExceptionEvent(Timestamps):
    url = models.CharField(max_length=255,  blank=True)
    err = models.TextField(blank=True)
    line = models.TextField(blank=True)
    ex_description = models.TextField(blank=True)


class TimeSpentEvent(Timestamps):
    time = models.CharField(max_length=255)
    time_ms = models.IntegerField()


class SearchEvent(Timestamps):
    page = models.IntegerField()
    job_title = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    employees = models.CharField(max_length=255, blank=True)
    industry = models.CharField(max_length=255, blank=True)
    hiring_for = models.CharField(max_length=255, blank=True)
    revenue = models.CharField(max_length=255, blank=True)
    keyword = models.CharField(max_length=255, blank=True)
    name = models.CharField(max_length=255, blank=True)
    technology = models.CharField(max_length=255, blank=True)
    email_status = models.CharField(max_length=255, blank=True)
    funding = models.CharField(max_length=255, blank=True)


class Company(Timestamps):
    data = models.JSONField()
    object_id = models.CharField(max_length=255, unique=True)
    
class People(Timestamps):
    data = models.JSONField(null=True)
    object_id = models.CharField(max_length=255, unique=True)