import hashlib
import uuid
from django.http import HttpResponse
import csv
import io

def generate_uuid_utf8():
    return str(uuid.uuid4())

def generate_uuid():
    return uuid.uuid4().hex

def hash_string(str):
    return hashlib.md5(bytes(str, 'utf8')).hexdigest()

def download_csv_response(result, fieldnames):
    
    # Create a buffer for the CSV
    buffer = io.StringIO()

    # Write the data to the buffer
    writer = csv.DictWriter(buffer, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(result)

    # Rewind the buffer
    buffer.seek(0)
    response = HttpResponse(buffer, content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename=leads.csv'

    return response
