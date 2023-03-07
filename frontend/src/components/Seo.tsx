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
          content="https://repository-images.githubusercontent.com/233832487/cddf0ff5-a35f-4380-8912-1c9f365366a8"
        />
        <meta
          property="og:url"
          content="https://elastic.github.io/next-eui-starter/"
        />
      </Head>
    );
  }