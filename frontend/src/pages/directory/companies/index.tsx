import { EuiLink } from '@elastic/eui';
import { GetServerSideProps } from 'next/types';
import Seo from '../../../components/Seo';
import AuthedLanding from '../../../layouts/AuthedLanding';
import UnAuthedLanding from '../../../layouts/UnAuthedLanding';
import BackendAxios from '../../../utils/axios/backend';

function Content({ is_authenticated, total_pages }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;

  const results = [];
  for (let index = 0; index < total_pages; index++) {
    const pageNumber = index + 1;
    const element = (
      <li>
        <EuiLink href={`/directory/companies/pages/${pageNumber}/`}>
          Page {pageNumber}
        </EuiLink>
      </li>
    );
    results.push(element);
  }
  return (
    <>
      <Seo title="Directory" />
      <Component>
        <ul className='p-8'>{results}</ul>
      </Component>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  const { data } = await BackendAxios.get(`/directory/companies/`);

  return {
    props: { total_pages: data.total_pages },
  };
};

export default Content;
