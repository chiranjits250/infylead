import Seo from '../components/Seo';
import AuthedLanding from '../layouts/AuthedLanding'
import UnAuthedLanding from '../layouts/UnAuthedLanding'

const Content = () => {
  return (
    <div className="">
        Contact Us for Pricing
    </div>
  );
};

function Page({is_authenticated}) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding

  return (
    <>
      <Seo title="Pricing" />

      <Component>
        <Content />
      </Component>
    </>
  )
}

export default Page;
