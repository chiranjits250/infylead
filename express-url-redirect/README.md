# Express.js URL Redirect

This is a simple Express.js application that redirects all URLs whose host is `infylead.com` to `www.infylead.com`.

## Getting Started

1. Install the dependencies:

```
cd express-url-redirect
npm install
```

2. Start the application:

```
npm start
```
3. Open your web browser and navigate to `http://infylead.com:3000`. You should be automatically redirected to `http://www.infylead.com:3000`.

## Docker

This application can also be run in a Docker container. To build a Docker image, run the following command from the root directory of the project:

docker build -t example-redirect:1.0.0 .

To run the Docker container:

docker run -p 3000:3000 example-redirect:1.0.0