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
    search.save()


def save_emails(contacts):

    def make_object(contact):
        person_id = contact[0]
        data = contact[1]
        return Search(type='email', keyword=person_id, data=data)

    Search.objects.bulk_create(list(map(make_object, contacts)))

    # for contact in contacts:
        # print(person_id)
        # save_search_data('email', person_id, contact)
