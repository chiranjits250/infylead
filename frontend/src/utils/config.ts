const env = process.env.NODE_ENV

const Config = {
  OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID, 
  DOMAIN_NAME: 'www.infylead.com', 
  IS_DEV : env == "development",
  IS_PRODUCTION : env == "production",
}

export default Config
