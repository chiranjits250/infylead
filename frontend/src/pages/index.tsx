import DashboardContent from '../components/DashboardContent';
import LandingContent from '../components/LandingContent';
import Seo from '../components/Seo';
import AuthedDashboard from '../layouts/AuthedDashboard';
import UnAuthedLanding from '../layouts/UnAuthedLanding';

const Page = ({ is_authenticated , ...props }:any) => {
  return (
    <>
      <Seo title="Home" />

      {is_authenticated ? (
        <AuthedDashboard>
          <DashboardContent {...props} />
        </AuthedDashboard>
      ) : (
        <UnAuthedLanding>
          <LandingContent />
        </UnAuthedLanding>
      )}
    </>
  );
};

export default Page;
