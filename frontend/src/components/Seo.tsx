import Head from 'next/head'

export default function Seo({
  title = 'InfyLead The Ultimate Lead Generation Solution',
  description = 'Boost your business with our powerful lead generation software! InfyLead is the Ultimate Lead Generation Solution help you find leads. Try us now!',
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
      {hasChat ? <script
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