import Seo from '../../components/Seo';
import { EuiText } from '@elastic/eui';
import AuthedLanding from '../../layouts/AuthedLanding'
import UnAuthedLanding from '../../layouts/UnAuthedLanding'
import Footer from '../../components/Footer'


function PrivacyPolicy({is_authenticated}) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;

  return (
    <>
      <Seo title="Privacy Policy" />

      <Component>
        <div className="p-8">
          <EuiText>
          </EuiText>
        </div>
        <Footer/>
      </Component>
    </>
  );
}

export default PrivacyPolicy;
