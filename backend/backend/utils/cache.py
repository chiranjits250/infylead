from django.db.utils import IntegrityError, OperationalError
import sqlite3
from backend.utils.model_utils import safe_save
from backend.models import Search


def get_search_data(type, keyword):
    try:
        search = Search.objects.get(type=type, keyword=keyword)
        return search.data
    except Search.DoesNotExist:
        return None


def save_search_data(type, keyword, data):
    search = Search(type=type, keyword=keyword)
    search.data = data
    try:
        safe_save(search)
    except IntegrityError as e:
        
        pass
    except sqlite3.IntegrityError as e:
        
        pass
    except OperationalError as e:
        
        pass


def save_emails(contacts):

    def make_object(contact):
        person_id = contact[0]
        data = contact[1]
        print(person_id, data['email'])
        return Search(type='email', keyword=person_id, data=data)
    try:
        Search.objects.bulk_create(list(map(make_object, contacts)))
    except IntegrityError as e:
        pass
    except sqlite3.IntegrityError as e:
        pass