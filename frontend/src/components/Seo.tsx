import Head from 'next/head';

export default function Seo({
    title = 'InfyLead The Ultimate Lead Generation Solution',
    description = 'Boost your business with our powerful lead generation software! InfyLead is the Ultimate Lead Generation Solution help you find leads. Try us now!',

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
      </Head>
    );
  }