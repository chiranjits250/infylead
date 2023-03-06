import Config from "../utils/config"
import Links from "../utils/data/links"

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.home}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.blog}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.pricing}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.signIn}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.signUp}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.contactUs}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.terms}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.privacy}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.companiesDirectory}</loc>
    </url>
    <url>
        <loc>https://${Config.DOMAIN_NAME}${Links.peopleDirectory}</loc>
    </url>    
</urlset> 
  `.trim();
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
