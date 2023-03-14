import Head from 'next/head'

export default function Seo({
  title = 'InfyLead: The Optimal Way to Generate High-Quality Leads',
  description = 'Amplify your business with our robust lead generation software! InfyLead is the definitive solution that enables you to locate leads. Give us a try today!',
  isLanding = false,
  isPricing = false,
  hasChat = false

}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.infylead.com/images/favicon/prod/favicon-96x96.png"
      />
      <meta
        property="og:url"
        content="https://www.infylead.com/"
      />
      {isLanding && <link rel="stylesheet" href={`${''}/css/landing.css`} />}
      {(isLanding || isPricing) && <link rel="stylesheet" href={`${''}/css/landing1.css`} />}

      {isPricing && <link rel="stylesheet" href={`${''}/css/pricing.css`} />}
      {true ? <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp=[];window.CRISP_WEBSITE_ID="7b42cad7-ec25-4d4d-8c78-76bdd5d8086e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();          `,
        }}
      />
        : undefined}

    </Head>
  )
}