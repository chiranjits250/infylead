from pydash import uniq_by
from joblib import Parallel, delayed
import math
import pydash
import requests
from backend.custom_exception_handler import CustomException
from backend.models import *
from backend.utils.cache import *

from .lead_finder import LeadFinder
from .email_finder import EmailFinderInstance
from greatawesomeutils.lang import sleep_for_n_seconds, merge_dicts_in_one_dict,  merge_list_of_dicts, write_temp_json, read_json
from itertools import cycle
import random
from requests_ip_rotator import ApiGateway

random.seed(1)

gateway = ApiGateway("https://app.apollo.io/", access_key_id="AKIAYXZPEEUKYYIH5SX3",
                     access_key_secret="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")
gateway.start()

# Assign gateway to session
session = requests.Session()
session.mount("https://app.apollo.io/", gateway)


def split_list(input_list, chunk_size):
    # Get the number of chunks to create
    chunks = [input_list[i:i + chunk_size]
              for i in range(0, len(input_list), chunk_size)]
    return chunks

#


def get_leads_query_data(query):
    lead_cred = LeadFinder.getDataCredentials()
    response = session.post(
        'https://app.apollo.io/api/v1/mixed_people/search',  json=query, **lead_cred)
    data = response.json()

    pagination = data.get('pagination')

    if pagination is None and not LeadFinder.isUsingAlternate():
            write_temp_json(data)
            print(query, data)
            print("BAD QUERY")

            LeadFinder.useAlternate()
            return get_leads_query_data(query)
    return data



def pick_value(ls):
    return [l["value"] for l in ls]


def make_query(data):
    base = {
        "finder_view_id": "5a205be19a57e40c095e1d5f",
        "page": 1,
        "display_mode": "explorer_mode",
        "per_page": 25,
        "open_factor_names": [],
        "num_fetch_result": 12,
        "context": "people-index-page",
        "show_suggestions": False,
        "include_contact_engagement_stats": False,
        "include_account_engagement_stats": False,
        "ui_finder_random_seed": "0mhcn4bh04c",
        "cacheKey": 1675691253372
    }

    name = data.get('name')

    job_title = data.get('job_title')
    not_job_title = data.get('not_job_title')

    company = data.get('company')
    location = data.get('location')
    not_location = data.get('not_location')

    employees = data.get('employees')
    industry = data.get('industry')
    keyword = data.get('keyword')
    hiring_for = data.get('hiring_for')
    revenue = data.get('revenue')
    technology = data.get('technology')
    email_status = data.get('email_status')
    funding = data.get('funding')

    page = data.get('page')

    if page != '':
        base['page'] = page

    if job_title != []:
        base['person_titles'] = pick_value(job_title)

    if not_job_title != []:
        base['person_not_titles'] = pick_value(not_job_title)

    if hiring_for != []:
        base['q_organization_job_titles'] = pick_value(hiring_for)

    if technology != []:
        base['currently_using_any_of_technology_uids'] = pick_value(technology)

    if funding != []:
        base['organization_latest_funding_stage_cd'] = pick_value(funding)

    if email_status != []:
        base['contact_email_status'] = pick_value(email_status)

    if keyword != '':
        base['q_organization_keyword_tags'] = [keyword]

    if name != '':
        base['q_person_name'] = name

    if company != []:
        base['organization_ids'] = pick_value(company)

    if location != []:
        base['person_locations'] = pick_value(location)

    if not_location != []:
        base['person_not_locations'] = pick_value(not_location)

    if employees != []:
        base['organization_num_employees_ranges'] = pick_value(employees)

    if industry != []:
        base['organization_industry_tag_ids'] = pick_value(industry)

    if revenue != '':
        if revenue == '$0 - $1K':
            base["revenue_range"] = {"max": "1000"}

        elif revenue == '$1K - $10K':
            base["revenue_range"] = {
                "max": "10000",
                "min": "1000"
            }
        elif revenue == '$10K - $100K':
            base["revenue_range"] = {
                "max": "100000",
                "min": "10000"
            }
        elif revenue == '$100K - $500K':
            base["revenue_range"] = {
                "max": "500000",
                "min": "100000"
            }
        elif revenue == '$500K - $1M':
            base["revenue_range"] = {
                "max": "1000000",
                "min": "500000"
            }
        elif revenue == '$1M - $10M':
            base["revenue_range"] = {
                "max": "10000000",
                "min": "1000000"
            }
        elif revenue == '$10M - $100M':
            base["revenue_range"] = {
                "max": "100000000",
                "min": "10000000"
            }
        elif revenue == '$100M - $1B':
            base["revenue_range"] = {
                "max": "1000000000",
                "min": "100000000"
            }
        elif revenue == '$1B+':
            base["revenue_range"] = {
                "min": "1000000000"
            }
        else:
            raise Exception("Invalid Revenue")

    return base


MAX_THREADS = 60


def convert_cleaned_name_to_options(list_of_objects):
    result = []
    for obj in list_of_objects:
        result.append({'id': obj['cleaned_name'],
                      'value': obj['cleaned_name']})
    return result


def convert_cleaned_name_to_technology_options(list_of_objects):
    result = []
    for obj in list_of_objects:
        result.append({'id': obj['uid'],
                      'value': obj['cleaned_name']})
    return result


def map_job_titles(list_of_objects):
    result = []
    for obj in list_of_objects:
        result.append({'id': obj['id'],
                      'value': pydash.start_case(obj['value']).replace('Ceo', "CEO")})
    return result


def convert_company_to_options(list_of_objects):
    result = []
    for obj in list_of_objects:
        result.append({'id': obj['id'],
                      'value': obj['name']})
    return result


def filter_companies(leads):
    ids = list(map(lambda x: x['company_id'], leads))

    obj = Company.objects.filter(object_id__in=ids)
    in_db = [o.object_id for o in obj]
    not_in_db = [g for g in ids if g not in in_db]

    return in_db, not_in_db


def filter_emails(entity_ids):
    ids = entity_ids
    type = 'email'

    obj = Search.objects.filter(keyword__in=ids, type=type)
    in_db = [o.keyword for o in obj]
    not_in_db = [g for g in ids if g not in in_db]

    return in_db, not_in_db


def get_emails_in_db(entity_ids):
    ids = entity_ids
    type = 'email'

    obj = Search.objects.filter(keyword__in=ids, type=type)
    return [o.data for o in obj]


def get_companies_in_db(in_db):
    ids = in_db
    obj = Company.objects.filter(object_id__in=ids)
    return [o.data for o in obj]


def filter_leads_not_in_db(leads):
    ids = list(map(lambda x: x['id'], leads))

    obj = People.objects.filter(object_id__in=ids)
    database_ids = [o.object_id for o in obj]
    result = [g for g in leads if g["id"] not in database_ids]

    return result


def clean_lead(lead):
    username = lead.get('linkedin_url').replace(
        "http://www.linkedin.com/in/", "").replace("/", "") if lead.get('linkedin_url') is not None else None
    org = lead.get('organization') if lead.get(
        'organization') is not None else {}

    phone = org.get('sanitized_phone')

    name = lead.get('name')
    companyName = org.get('name')

    person_id = lead.get('person_id')
    lead_id = lead.get('id')
    id = person_id if person_id is not None else lead_id
    company_id = lead.get('organization_id')

    loc_data = lead
    location = pydash.filter_([loc_data.get('city'), loc_data.get(
        'state'), loc_data.get('country')],  is_not_empty)

    location = commify(location)

    experiences = [pydash.pick(x, "start_date", "end_date", "title",
                               "organization_name") for x in lead.get("employment_history")]

    result = {
        "id": lead_id,
        "name": name,
        "first_name": lead.get('first_name'),
        "last_name": lead.get('last_name'),
        "email": 'Get Email',
        "headline": lead.get('headline'),
        "location": location,
        "experiences": experiences,

        'linkedin_url': lead.get('linkedin_url'),
        'twitter_url': lead.get('twitter_url'),
        'github_url': lead.get('github_url'),
        'facebook_url': lead.get('facebook_url'),

        'founded_year': org.get('founded_year'),
        'company_name': companyName,
        'company_linkedin_url': org.get('linkedin_url'),
        'company_website': org.get('website_url'),
        "company_id": company_id,
        'company_phone': phone,
        'company_twitter_url': org.get('twitter_url'),
        'company_facebook_url': org.get('facebook_url'),
    }

    return result


def is_not_empty(x):
    return x is not None and len(x.strip()) > 0


def commify(ls):
    return ", ".join(ls)


def clean_company(company):
    loc_data = company['location']
    location = pydash.filter_([loc_data.get('city'), loc_data.get(
        'state'), loc_data.get('country')],  is_not_empty)

    location = commify(location)

    return {
        "id": company.get("id"),
        "company_id": company.get("id"),
        "company_name": company.get("name"),
        "company_website": company.get("website_url"),
        "company_location":  location if is_not_empty(location) else None,
        "company_twitter_url":  company.get("twitter_url"),
        "company_facebook_url": company.get("facebook_url"),
        "company_instagram_url": company.get("instagram_url"),
        "company_linkedin_url": company.get("linkedin_url"),
        "company_youtube_url": company.get("youtube_url"),
        "company_angellist_url": company.get("angellist_url"),
        "company_crunchbase_url": company.get("crunchbase_url"),
        "company_blog_url": company.get("blog_url"),
        "company_phone": company.get("phone_number"),
        "employee_count": company.get("employee_count"),
        "technologies":   commify([t.get("name") for t in company.get("technologies")]),
        "revenue": company.get("revenue"),
        "industries": commify(company.get("industries")),
        "keywords": commify(company.get("keywords")),
    }


def add_companies_in_db(companies):
    in_db, not_in_db = filter_companies(companies)
    s = set(not_in_db)

    xs = list(filter(lambda x: x.get("id") in s, companies))

    # for x in xs:
    #     if not Company.objects.filter(object_id=x["id"]).exists():
    #         c = Company(data=x, object_id=x["id"])
    # c.save()

    def make_object(x):
        return Company(data=x, object_id=x["id"])

    Company.objects.bulk_create(list(map(make_object, xs)))


def add_leads_in_db(leads):
    new_leads = filter_leads_not_in_db(leads)
    s = set([l.get('id') for l in new_leads])

    xs = list(filter(lambda x: x.get("id") in s, new_leads))

    # for x in leads:
    #     if not People.objects.filter(object_id=x["id"]).exists():
    #         p = People(data=x,  object_id=x["id"])
    # p.save()

    def make_object(x):
        return People(data=x, object_id=x["id"])

    People.objects.bulk_create(list(map(make_object, xs)))


def put_lead_company_in_database(leads):

    unique_companies = uniq_by(
        list(filter(lambda x: x.get('company_id') is not None, leads)), 'company_id')

    in_db, not_in_db = filter_companies(unique_companies)

    in_db_companies = get_companies_in_db(in_db)
    new_companies_with_data = (Parallel(n_jobs=MAX_THREADS, backend="threading")(delayed(lambda x: ApolloApi.get_company(x))
                                                                                 (l) for l in not_in_db))
    filtered_company_data = list(
        filter(lambda x: x.get("id") is not None,  new_companies_with_data))

    filtered_company_data = [clean_company(x) for x in filtered_company_data]
    add_companies_in_db(filtered_company_data)
    result = filtered_company_data + in_db_companies

    return [pydash.omit(x, "experiences") for x in result]


def put_lead_in_database(leads):
    unique_leads = uniq_by(leads, 'id')
    add_leads_in_db(unique_leads)

class ApolloApi():
    def search_locations(name):
        params = {
            'q_tag_fuzzy_name': name,
            'exclude_categories[]': 'US State',
            'kind': 'location',
            'display_mode': 'fuzzy_select_mode',
            'cacheKey': '1675683341112',
        }
        response = requests.get('https://app.apollo.io/api/v1/tags/search',
                                params=params, **LeadFinder.getDataCredentials())
        result = response.json()
        picked = list(map(lambda cleaned_lead: pydash.pick(
            cleaned_lead, 'cleaned_name'), result['tags']))

        return convert_cleaned_name_to_options(picked)

    def search_companies(name):
        json_data = {
            'q_organization_fuzzy_name': name,
            'display_mode': 'fuzzy_select_mode',
            'cacheKey': 1675684165331,
        }

        response = session.post('https://app.apollo.io/api/v1/organizations/search',
                                 json=json_data, **LeadFinder.getCompanyCredentials())

        result = response.json()
        # print(result)
        picked = list(map(lambda cleaned_lead: pydash.pick(
            cleaned_lead, 'id', 'name'), result['organizations']))
        return convert_company_to_options(picked)

    def convert_page(current, total_pages):
        if current == total_pages:
            return total_pages

        if total_pages == 2:
            return current

        mid = math.ceil(total_pages/2)
        templs = list(range(1, total_pages))
        ls = cycle(templs)
        temp = None

        while temp != mid:
            temp = next(ls)

        iterations = current - 1

        while iterations > 0:
            temp = next(ls)
            iterations -= 1

        return temp

    def search_job_titles(name):

        params = {
            'q_tag_fuzzy_name': name,
            'kind': 'person_title',
            'display_mode': 'fuzzy_select_mode',
            'cacheKey': '1675684096964',
        }

        response = requests.get('https://app.apollo.io/api/v1/tags/search',
                                params=params, **LeadFinder.getDataCredentials())
        result = response.json()
        picked = list(map(lambda cleaned_lead: pydash.pick(
            cleaned_lead, 'cleaned_name'), result['tags']))
        return map_job_titles(convert_cleaned_name_to_options(picked))

    def search_technologies(name):
        params = {
            'q_tag_fuzzy_name': name,
            'kind': 'technology',
            'display_mode': 'fuzzy_select_mode',
            'cacheKey': '1675684096964',
        }

        response = requests.get('https://app.apollo.io/api/v1/tags/search',
                                params=params, **LeadFinder.getDataCredentials())
        result = response.json()
        picked = list(map(lambda cleaned_lead: pydash.pick(
            cleaned_lead, 'cleaned_name', 'uid'), result['tags']))

        return convert_cleaned_name_to_technology_options(picked)

    def get_company(id):
        cookies = {}
        headers = {
            'authority': 'discovery-api.apollo.io',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.8',
            # 'cookie': 'cf_clearance=Ens6nDIPye_CbsEGSPvJLfliJT6clmN_NesJWbYdcCU-1676970198-0-150; ZP_Discovery_Split_Test_Variant=%7B%22Discovery+Company+Page+Redesign%22%3A%22Treatment+with+Signup%22%7D; zp__initial_referrer=https://www.apollo.io/companies/Safeway/54a11eb969702d86b6607701?chart=count&__cf_chl_tk=mZJwRODjZSwYsfvnyVu38rP5cVKk12gH8L6RwYSf09w-1676970195-0-gaNycGzNChA; zp__utm_medium=Discovery; zp__initial_utm_medium=Discovery; zp__utm_source=Apollo; zp__initial_utm_source=Apollo; zp__utm_campaign=Discovery%20Company%20Page%20-%20General; zp__initial_utm_campaign=Discovery%20Company%20Page%20-%20General',
            'origin': 'https://www.apollo.io',
            'referer': 'https://www.apollo.io/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        }

        data = {
            "cookies": cookies,
            "headers": headers
        }

        response = requests.get(
            'https://discovery-api.apollo.io/api/v1/discovery/modality/organizations/entity/' + id,
            **data)
        result = response.json()
        return result

    def get_total_pages(data):
        query = make_query(data)
        data = get_leads_query_data(query)

        pagination = data.get('pagination')

        if pagination is None:

            write_temp_json(data)
            print(query, data)
            print("BAD QUERY")
            return 0, 0

        total_pages = pagination['total_pages']
        total_entries = data['pagination']['total_entries']

        return min(100, total_pages), min(2500, total_entries)

    def get_leads(data, total_pages):
        data['page'] = ApolloApi.convert_page(data['page'], total_pages)

        query = make_query(data)
        data = get_leads_query_data(query)
        new_leads = data["people"] + data["contacts"]
        cleaned_leads = list(map(clean_lead, new_leads))

        random.shuffle(cleaned_leads)

        return cleaned_leads

    def collect_leads(queryparams, total_pages, total_entries, limit):
        leads = []

        pages_limit = math.ceil(limit/25)
        total_pages = min(total_pages, pages_limit)
        total_entries = min(total_entries, limit)

        ls = []
        for i in range(total_pages):
            result = merge_dicts_in_one_dict(
                [queryparams, {"page": i + 1}])
            ls.append(result)

        runs = 0
        leads = []
        n_jobs = MAX_THREADS

        while True:
            new_leads = (Parallel(n_jobs=n_jobs, backend="threading")(delayed(lambda x: ApolloApi.get_leads(x, total_pages))
                                                                      (l) for l in ls))
            leads = uniq_by(leads + pydash.flatten(new_leads), "id")

            hax_exceeded_max_leads = len(leads) >= limit

            if hax_exceeded_max_leads or len(leads) >= total_entries:
                return leads[0: limit]
            else:
                runs = runs + 1
                if runs == 5:
                    return leads[0: limit]

    def get_leads_with_email(queryparams, total_pages, total_entries, limit):
        print("Collecting Leads")
        leads = ApolloApi.collect_leads(
            queryparams, total_pages, total_entries, limit)
        # print(leads)
        print("Collecting and Putting Companies")
        companies = put_lead_company_in_database(leads)
        print("Putting Leads")
        put_lead_in_database(leads)

        def merge(lead):
            company = {}

            if lead.get("company_id") is not None:
                temp = pydash.find(companies, {'id': lead.get("company_id")})
                if temp is not None:
                    company = temp

            return merge_dicts_in_one_dict([company, lead])
        print("Merging")
        enriched_leads = list(map(merge, leads))

        # map leads if lead in company merge it else ignore
        # for lead in leads:
        #     find company from companyis
        #     and merge with self

        print("Email Enriching")
        MAX_EMAILS = 25
        chunks = split_list(enriched_leads, MAX_EMAILS)
        # result = []

        # for chunk in chunks:
        #     emails = ApolloApi.get_emails(pydash.pluck(chunk, 'id'))
        #     enriched = merge_list_of_dicts([chunk,  emails])
        #     result = result + enriched
            
        #     # sleep_for_n_seconds(random.uniform(210, 240))

        # return [pydash.omit(x, "company_id", "id", "experiences") for x in result]



        def perform_merge(chunk):
            emails = ApolloApi.get_emails(pydash.pluck(chunk, 'id'))
            enriched = merge_list_of_dicts([chunk,  emails])
            return enriched

        results = (Parallel(n_jobs=15, backend="threading")(delayed(lambda x: perform_merge(x))
                                                                     (l) for l in chunks))
        result = pydash.flatten(results)

        # for chunk in chunks:
        # emails = ApolloApi.get_emails(pydash.pluck(chunk, 'id'))
        # enriched = merge_list_of_dicts([chunk,  emails])
        # result = result + enriched

        # sleep_for_n_seconds(random.uniform(210, 240))

        return [pydash.omit(x, "company_id", "id", "experiences", "phone") for x in result]

    def get_credits(credentials):
        json_data = {
            'min_date': '2023-03-26T00:00:01.000-07:00',
            'max_date': '2023-04-26T00:00:01.000-07:00',
            'cacheKey': 1679995393025,
        }

        # data = EmailFinderInstance.get_one()
        response = session.post(
            'https://app.apollo.io/api/v1/credit_usages/credit_usage_by_user',
            json=json_data,
            **credentials
        )

        id = credentials["headers"]["myappid"]

        if response.status_code == 401 and "Invalid access credentials." in response.text:
            return {"message": "No User"}

        # print(response.status_code)
        # print(response.text)
        #
        data = response.json()

        # print(id ,  data)
        users = pydash.keys(data['user_id_to_credit_usage'])
        if len(users) == 0:
            return {"message": "No User"}

        user_id = users[0]
        email_credits = data['user_id_to_credit_usage'][user_id]["email"]
        # result = email_credits["used"]
        email_credits["id"] = id
        return email_credits

    def log_all_credits():
        limit = 0
        used = 0

        all_credits = (Parallel(n_jobs=MAX_THREADS, backend="threading")(delayed(lambda x: ApolloApi.get_credits(x))
                                                                         (l) for l in EmailFinderInstance.get_data()))

        for credits in all_credits:
            # credits = ApolloApi.get_credits(x)
            limit += credits.get("limit", 0)
            used += credits.get("used", 0)

            print(credits)
        return {'limit': limit, 'used': used}
        # ApolloApi.get_credits()
        # pass

    def get_emails(entity_ids):
        def pure_run(not_in_db, lasttry):
            if len(not_in_db) == 0:
                return []

            json_data = {
                'entity_ids': not_in_db,
                'analytics_context': 'Searcher: Individual Add Button',
                'cta_name': 'Access Email',
                'cacheKey': 1673009723638,
            }

            data = EmailFinderInstance.get_one()

            if data is None:
                # print(lasttry)
                if lasttry:
                    print('Accounts Exhausted')
                    message = "Failed to get Email. Contact Admin."
                    raise CustomException(message)

                    return [{"email": "FAILED TO GET EMAIL", "is_email_verified": False}] * len(not_in_db)
                else:
                    EmailFinderInstance.set_data(
                        EmailFinderInstance.get_data())
                    # print(EmailFinderInstance.data)
                    return pure_run(not_in_db, True)

            response = session.post(
                'https://app.apollo.io/api/v1/mixed_people/add_to_my_prospects',
                json=json_data,
                **data
            )

            if response.status_code >= 299:
                is_422 = response.status_code == 422
                is_401 = response.status_code == 401
                is_500 = response.status_code == 500
                print(response.status_code)
                print(response.text)
                # print("is_422", is_422)
                # print("is_401", is_401)
                if is_422 or is_401 or is_500:
                    # if 'blocked' in response.json()['error']:
                    # print('EMAIL BLOCKED')
                    if is_422:
                        temp_data = response.json()
                        hasOops = "Oops! Looks like somebody (maybe you!) on your team just prospected from Apollo. We go to great lengths to make sure your team doesn't create duplicates and get charged twice. To do this, we need just a tiny" in temp_data.get('error')
                        print("hasOops", hasOops)
                        if hasOops:
                            return pure_run(not_in_db, lasttry)
                        # GET JSON
                        # IF THAT THEN JUST  RETURN PURERUN
                    EmailFinderInstance.remove_data(data)
                    return pure_run(not_in_db, lasttry)
                    # return [{"email": "FAILED TO GET EMAIL", "is_email_verified": False}] * len(entity_ids)

            data = response.json()

            result = data['contacts']

            return result

        def get_contacts(not_in_db, lasttry):
            data = pure_run(not_in_db, lasttry)

            def merge(entity_id):
                result = pydash.find(
                    data, lambda x: x['id'] == entity_id or x['person_id'] == entity_id)
                return [entity_id, result]

            merged = list(
                filter(lambda x: x[1] is not None, map(merge, not_in_db)))
            save_emails(merged)
            return data

        in_db, not_in_db = filter_emails(entity_ids)
        in_db_contacts = get_emails_in_db(in_db)

        try:
            queried_contacts = get_contacts(not_in_db, False)
            contacts = queried_contacts + in_db_contacts

            def get_email(x):
                obj = pydash.find(contacts, {'person_id': x})

                if obj is None:
                    return {"email":  'NOT FOUND', "is_email_verified": False}

                is_email_verified = obj.get('email_status') == 'verified'
                email = obj.get('email')

                if email is None:
                    email = 'NOT FOUND'
                verified_email = email if is_email_verified else None
                return {"email":  email, "is_email_verified": is_email_verified}

            result = list(map(get_email, entity_ids))
            return result
        except Exception as e:
            print(e)
            raise e

    def get_email(id):
        return ApolloApi.get_emails([id])[0]
#
# print(ApolloApi.log_all_credits())

# print(ApolloApi.get_credits())
# print(ApolloApi.get_credits())


if __name__ == '__main__':
    # print(ApolloApi.get_company('5fd871808cb6640001f8c8dc'))

    # print(ApolloApi.search_technologies('anal'))

    #     leads = ApolloApi.get_leads_with_email({
    #     "page": 1,
    #     "job_title": "founder",
    #     "company": "",
    #     "location": "",
    #     "employees": "51,100",
    #     "industry": "5567cd467369644d39040000"
    # } , 100 , 50)
    # leads = list(filter(lambda  lead: 'Get Email' != lead['email'] and lead["company_phone"] is not None, leads))
    # write_temp_json(list(filter(lambda  lead: 'Get Email' != lead['email'] and lead["company_phone"] is not None, leads)))
    # print(ApolloApi.get_email('54a4b85974686938ac33615e'))
    # print(ApolloApi.get_email('54a4b85974686938ac33615e'))
    # print(ApolloApi.get_email('54a4b85974686938ac33615e'))
    # print(ApolloApi.get_email('54a4b85974686938ac33615e'))
    # organization_ids 639c5ffdaf846700a39060e5

    # print(ApolloApi.convert_page(1, 1))  # 3
    # print(ApolloApi.convert_page(2, 2))  # 3
    # print(ApolloApi.convert_page(1, 2))  # 3

    # print(ApolloApi.convert_page(1, 5))  # 3
    # print(ApolloApi.convert_page(2, 5))  # 4
    # print(ApolloApi.convert_page(3, 5))  # 1
    # print(ApolloApi.convert_page(4, 5))  # 2
    # print(ApolloApi.convert_page(5, 5))  # 5

    # print(ApolloApi.convert_page(1, 6))  # 3
    # print(ApolloApi.convert_page(2, 6))  # 4
    # print(ApolloApi.convert_page(3, 6))  # 5
    # print(ApolloApi.convert_page(4, 6))  # 1
    # print(ApolloApi.convert_page(5, 6))  # 2
    # print(ApolloApi.convert_page(6, 6))  # 6

    query = {
        "page": 6,
        "location": "sirsa",
        # "job_title": "founder",
        # "name":"Abhishek Kumar"
        # "keyword" :"Hydroponics"
        # "hiring_for": "teacher",
        # "revenue": "$100K - $500K"
        # "company": "5e55a732b2a59b0001291006",
        # "employees": "11,20",
        # "industry": "5567e1587369641c48370000",
    }

    # print(ApolloApi.search_companies('goo'))
    # total_page, total_entries = ApolloApi.get_total_pages(query)
    # print(total_page)

    # write_temp_json(ApolloApi.collect_leads(
    #     query, total_page, total_entries, 2500))

    # write_temp_json(ApolloApi.get_leads_with_email(query, 100, 500))
    # while True:
    #     print(ApolloApi.search_locations('sir'))
    #     print(ApolloApi.search_companies('hdf'))
    #     print(ApolloApi.search_job_titles('tea'))

# search: pick uid: id, cleaned_name:value
# currently_using_any_of_technology_uids: [google_analytics]

# on frontend
# organization_latest_funding_stage_cd:[add id]

# Email Status
# contact_email_status
# [
#     "guessed",
#     "verified",
#     "unavailable"
# ]
