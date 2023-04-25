from django.db.utils import OperationalError

def safe_save(user_action):
    # Weak Database Fix
    try:
        user_action.save()
    except OperationalError as e:
        print("Failed")
        pass