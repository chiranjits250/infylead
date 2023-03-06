FROM python:3.9
ENV PYTHONBUFFERED 1

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs

COPY requirements.txt .
RUN python -m pip install -r requirements.txt

RUN mkdir app
WORKDIR /app
COPY . /app

ADD docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

CMD ["npm", "run", "dev"]
