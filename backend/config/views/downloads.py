import os
from django.http import HttpResponse, Http404
from greatawesomeutils.relative_path import relative_path

def download_file(request, filename):
    file_path = os.path.join(relative_path('downloads'), filename)
    has_file = os.path.exists(file_path)
    if has_file:
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/octet-stream")
            response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
            return response
    raise Http404