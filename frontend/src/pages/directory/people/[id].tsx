import { EuiLink, EuiSpacer } from '@elastic/eui';
import { GetServerSideProps } from 'next/types';
import Seo from '../../../components/Seo';
import AuthedLanding from '../../../layouts/AuthedLanding';
import UnAuthedLanding from '../../../layouts/UnAuthedLanding';
import BackendAxios from '../../../utils/axios/backend';
import { makeComponent } from '../companies/[id]';

function Content({ is_authenticated, data }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;

  const components = makeComponent([
    ['Name', data['name']],
    ['First Name', data['first_name']],
    ['Last Name', data['last_name']],
    // ['Email', data['email']],
    ['Headline', data['headline']],
    ['Location', data['location']],
    // ['Experiences', data['experiences']],
    ['Linkedin Url', data['linkedin_url']],
    ['Twitter Url', data['twitter_url']],
    ['Github Url', data['github_url']],
    ['Facebook Url', data['facebook_url']],
    ['Company Founded Year', data['founded_year']],
    ['Company Name', data['company_name']],
    ['Company Linkedin Url', data['company_linkedin_url']],
    ['Company Website', data['company_website']],
    // ['Company Phone', data['company_phone']],
    ['Company Twitter Url', data['company_twitter_url']],
    ['Company Facebook Url', data['company_facebook_url']],
  ]);

  const experiences = data['experiences'];

  const expCmp = experiences.map(
    ({ start_date, end_date, title, organization_name }) => {
      
      return (
        <div className="p-4">
          <div>Title: {title}</div>
          <div>Organization Name: {organization_name},</div>
          {start_date && <div>Start Date: {start_date}</div>}
          {end_date && <div>End Date: {end_date}</div>}
        </div>
      );
    }
  );

  return (
    <>
      <Seo title="Directory" />
      <Component>
        <main className="container">
          <ul>{components}</ul>

          <EuiSpacer />
          <b>Experiences</b>
          <ul>{expCmp}</ul>
        </main>
      </Component>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = (params as any).id;

  const { data } = await BackendAxios.get(`/directory/people/${id}/`);

  return {
    props: data,
  };
};

export default Content;
