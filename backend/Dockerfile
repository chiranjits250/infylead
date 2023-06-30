FROM python:3.9
ENV PYTHONBUFFERED 1

# RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
# RUN apt-get install -y nodejs

COPY requirements.txt .
RUN python -m pip install -r requirements.txt

RUN mkdir app
WORKDIR /app
COPY . /app

# ADD docker-entrypoint.sh /
# RUN chmod +x /docker-entrypoint.sh

# CMD ["npm", "run", "db:migrate", "&&", "npm", "run", "dev"]
# CMD ["npm", "run", "db:migrate"]
# 
CMD python3 manage.py runserver 0.0.0.0:8000
# CMD gunicorn --workers 3 -b 0.0.0.0:8000 config.wsgi