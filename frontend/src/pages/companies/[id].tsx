import { GetServerSideProps } from 'next/types';
import BackendAxios from '../../utils/axios/backend';

function Content(data) {
  return <div>{JSON.stringify(data)}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
  req,
}) => {
  const id = (params as any).id;
  const { data } = await BackendAxios.get(`/company/${id}/`);

  if (data.redirect) {
    return {
      redirect: { destination: data.redirect, permanent: false },
    };
  }

  return {
    props: data,
  };
};

export default Content;
