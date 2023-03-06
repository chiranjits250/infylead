from django.core.management.base import BaseCommand
from backend.models import User
from backend.utils.hash_password import get_hashed_password


def create_user(name, email):
    user = User()
    user.name = name
    user.email = email
    user.password = get_hashed_password('12345678')
    user.auth_method = User.email_auth_method 
    user.save()
    return user.id

def delete_all():
    User.objects.all().delete()

    pass

class Command(BaseCommand):
    help = 'seeds data for developement'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        delete_all()

        if len(User.objects.all()) == 0:
            create_user('Admin', 'admin@admin.com')
            create_user('Sanskar', 'sanskar@sanskar.com')
            create_user('Sariputra', 'sariputra@sariputra.com')

        self.stdout.write(self.style.SUCCESS('Done Seeding Database'))
