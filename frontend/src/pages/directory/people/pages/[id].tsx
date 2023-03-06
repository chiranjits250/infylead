import { EuiLink } from '@elastic/eui';
import { GetServerSideProps } from 'next/types';
import Seo from '../../../../components/Seo';
import AuthedLanding from '../../../../layouts/AuthedLanding';
import UnAuthedLanding from '../../../../layouts/UnAuthedLanding';
import BackendAxios from '../../../../utils/axios/backend';

function Content({ is_authenticated, results }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;

  const cmps = results.map(r => (
    <li id={r.id}>
      <EuiLink href={`/directory/people/${r.id}/`}>
        People {r.id}
      </EuiLink>
    </li>
  ));

  return (
    <>
      <Seo title="Directory" />
      <Component>
        <ul className="container">{cmps}</ul>
      </Component>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = (params as any).id;

  const { data } = await BackendAxios.get(`/directory/people/?page=${id}`);

  return {
    props: data,
  };
};

export default Content;
