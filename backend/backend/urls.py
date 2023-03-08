from django.urls import path,include
from rest_framework import routers
from .views import auth,  test, leads,company, emails, events,users, directory

users_router = routers.DefaultRouter()
users_router.register(r'users', users.UserViewSet)


user_on_boarding_router = routers.DefaultRouter()
user_on_boarding_router.register(r'users-onboarding', users.UserOnboardingViewSet, basename='users-onboarding')

buy_subscription_interest_contact_router = routers.DefaultRouter()
buy_subscription_interest_contact_router.register(r'buy-subscription-interest-contact', events.BuySubscriptionInterestContactEventViewSet)

contact_router = routers.DefaultRouter()
contact_router.register(r'contact', events.ContactEventViewSet)

suggested_feautre_router = routers.DefaultRouter()
suggested_feautre_router.register(r'suggested-feautre', events.SuggestedFeautreEventViewSet)

visit_router = routers.DefaultRouter()
visit_router.register(r'visit', events.VisitEventViewSet)

exception_router = routers.DefaultRouter()
exception_router.register(r'exception', events.ExceptionEventViewSet)

time_spent_router = routers.DefaultRouter()
time_spent_router.register(r'time-spent', events.TimeSpentEventViewSet)

search_router = routers.DefaultRouter()
search_router.register(r'search', events.SearchViewEventSet)

company_router = routers.DefaultRouter()
company_router.register(r'directory/companies', directory.CompanyViewSet)

people_router = routers.DefaultRouter()
people_router.register(r'directory/people', directory.PeopleViewSet)


urlpatterns = [

    path('auth/sign-up/', auth.sign_up),
    path('auth/google-auth/', auth.google_auth),
    path('auth/sign-up-validate/', auth.sign_up_validate),
    path('auth/sign-up-email-verify/<str:token>/', auth.sign_up_email_verify),
    path('auth/sign-in/', auth.sign_in),
    path('auth/sign-out/', auth.sign_out),
    path('auth/me/', auth.me),
    path('auth/reset-password-send/', auth.reset_password_send),
    path('auth/reset-password-verify/<str:token>/',
         auth.reset_password_verify_token),
    path('auth/reset-password-change-validate/',
         auth.reset_password_change_validate),
    path('auth/reset-password-change/<str:token>/', auth.reset_password_change),
    path('test/', test.test),

    path('leads/search-locations/', leads.search_locations),
    path('leads/search-technologies/', leads.search_technologies),
    path('leads/search-companies/', leads.search_companies),
    path('leads/search-job-titles/', leads.search_job_titles),
    path('leads/email/', leads.get_email),
    path('leads/phone/', leads.get_phone),
    path('leads/leads/', leads.get_leads),
    path('leads/export-csv/', leads.download),

    path('company/<str:id>/', company.get_company),
    path('emails/get-domains/', emails.get_domains),
    path('emails/get-email/', emails.get_email),

    path('events/', include(buy_subscription_interest_contact_router.urls)),
    path('events/', include(contact_router.urls)),
    path('events/', include(suggested_feautre_router.urls)),
    path('events/', include(visit_router.urls)),
    path('events/', include(exception_router.urls)),
    path('events/', include(time_spent_router.urls)),
    path('events/', include(search_router.urls)),
    
    path('users/download_users/', users.download),
    path('', include(users_router.urls)),
    path('', include(user_on_boarding_router.urls)),
    
    path('', include(company_router.urls)),
    path('', include(people_router.urls)),
]
