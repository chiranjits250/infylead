from backend.utils.model_utils import safe_save
from backend.utils.cache import *
from backend.models import *
from backend.utils.apollo import ApolloApi, is_not_empty
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.response import Response
from backend.utils.utils import download_csv_response
from backend.permissions import *
from backend.custom_exception_handler import *
from rest_framework import status


def check_show_all_pages_limit(user_id, page):
    user = User.objects.get(id=user_id)
    if page > 2 and user.show_all_pages == False:
        raise CustomException("Cannot view more than Page 2.",
                              status.HTTP_403_FORBIDDEN)

def check_email_views_limit(user_id):
    user = User.objects.get(id=user_id)
    if (user.email_views + 1) > user.email_views_limit:
        raise CustomException("Email Credits Exhausted.",
                              status.HTTP_403_FORBIDDEN)

def increment_email_views(user_id):
    user = User.objects.get(id=user_id)
    user.email_views = user.email_views + 1
    safe_save(user)


def check_record_exports_limit(user_id, limit):
    user = User.objects.get(id=user_id)
    if (user.record_exports + limit) > user.record_exports_limit:
        raise CustomException(
            "Record Export Credits Exhausted.", status.HTTP_403_FORBIDDEN)


def increment_record_exports(user_id, limit):
    user = User.objects.get(id=user_id)
    user.record_exports = user.record_exports + limit
    safe_save(user)


def check_phone_views_limit(user_id):
    user = User.objects.get(id=user_id)
    if (user.phone_views + 1) > user.phone_views_limit:
        raise CustomException("Phone Credits Exhausted.",
                              status.HTTP_403_FORBIDDEN)


def increment_phone_views(user_id):
    user = User.objects.get(id=user_id)
    user.phone_views = user.phone_views + 1
    safe_save(user)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_locations(request):
    name = request.query_params['name']
    type = 'location'

    data = get_search_data(type,  name)
    if data is None:
        data = ApolloApi.search_locations(name)
        save_search_data(type, name, data)
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_companies(request):
    name = request.query_params['name']
    type = 'company'

    data = get_search_data(type,  name)
    if data is None:
        data = ApolloApi.search_companies(name)
        save_search_data(type, name, data)
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_job_titles(request):
    name = request.query_params['name']
    type = 'job_title'

    data = get_search_data(type,  name)
    if data is None:
        data = ApolloApi.search_job_titles(name)
        save_search_data(type, name, data)
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_technologies(request):
    name = request.query_params['name']
    type = 'technology'

    data = get_search_data(type,  name)
    if data is None:
        data = ApolloApi.search_technologies(name)
        save_search_data(type, name, data)

    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_email(request):
    id = request.query_params['id']
    check_email_views_limit(request.user_id)
    result = ApolloApi.get_email(id)

    if '@' in result.get('email'):
        increment_email_views(request.user_id)

    return Response(result)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_phone(request):
    id = request.query_params['id']
    phone = request.query_params.get('phone')
    check_phone_views_limit(request.user_id)
    has_phone = is_not_empty(phone)

    if has_phone:
        increment_phone_views(request.user_id)

    return Response({"phone": phone if has_phone else "No Phone"})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def get_leads(request):
    data = request.data
    
    # total_pages, total_entries = ApolloApi.get_total_pages(data)

    # if total_pages == 0:
    #     leads = []
    #     # Fix UI in Pages Select
    #     total_pages = 1
    # else:
    if request.user_id is not None:
            check_show_all_pages_limit(request.user_id, data['page'])
    leads, total_pages = ApolloApi.get_leads(data)

    result = {
        "total_pages": total_pages,
        "leads": leads
    }

    return Response(result)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def download(request):
    data = request.data
    limit = request.data['limit']
    check_record_exports_limit(request.user_id, limit)
    total_pages, total_entries = ApolloApi.get_total_pages(data)

    if total_pages == 0:
        result = []
    else:
        result = ApolloApi.get_leads_with_email(
            data, total_pages, total_entries, limit)
        credits_used = min(limit, len(result))
        increment_record_exports(request.user_id, credits_used )
#  'id', 'experiences', 'company_angellist_url', 'company_id', 'company_blog_url'

    return download_csv_response(result, [
        # 'id',
        "linkedin_url",
        'first_name',
        'last_name',
        'location',
        "name",
        "email",
        "is_email_verified",
        "headline",

        'twitter_url',
        'facebook_url',
        'github_url',

        'founded_year',
        "company_name",
        'company_location',
        'company_website',
        "company_linkedin_url",
        'company_twitter_url',
        'company_youtube_url',
        'company_facebook_url',
        'company_instagram_url',
        'company_crunchbase_url',
        'company_angellist_url',
        'company_blog_url',

        # 'company_id',
        "company_phone",
        'technologies',
        'keywords',
        'employee_count',
        'revenue',
        'industries',
    ])
