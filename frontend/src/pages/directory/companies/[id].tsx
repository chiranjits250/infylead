import { GetServerSideProps } from 'next/types';
import Seo from '../../../components/Seo';
import AuthedLanding from '../../../layouts/AuthedLanding';
import UnAuthedLanding from '../../../layouts/UnAuthedLanding';
import BackendAxios from '../../../utils/axios/backend';

export function makeComponent(ls: any[]) {
  return ls
    .filter(x => x[1] !== null)
    .map(x => (
      <li>
        <b>{x[0]}:</b> {x[1]}
      </li>
    ));
}

function Content({ is_authenticated, data }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;
  const components = makeComponent([
    ['Company Name', data['company_name']],
    ['Company Website', data['company_website']],
    ['Company Location', data['company_location']],
    ['Company Twitter Url', data['company_twitter_url']],
    ['Company Facebook Url', data['company_facebook_url']],
    ['Company Instagram Url', data['company_instagram_url']],
    ['Company Linkedin Url', data['company_linkedin_url']],
    ['Company Youtube Url', data['company_youtube_url']],
    ['Company Angellist Url', data['company_angellist_url']],
    ['Company Crunchbase Url', data['company_crunchbase_url']],
    ['Company Blog Url', data['company_blog_url']],
    // ['Company Phone', data['company_phone']],
    ['Employee Count', data['employee_count']],
    ['Technologies', data['technologies']],
    ['Revenue', data['revenue']],
    ['Industries', data['industries']],
    ['Keywords', data['keywords']],
  ]);
  return (
    <>
      <Seo title="Directory" />
      <Component>
        <ul className="container">{components}</ul>
      </Component>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = (params as any).id;

  const { data } = await BackendAxios.get(`/directory/companies/${id}/`);

  return {
    props: data,
  };
};

export default Content;
