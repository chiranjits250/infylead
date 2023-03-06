import Seo from '../components/Seo';
import { useState } from 'react';
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiCard,
} from '@elastic/eui';
import AuthedLanding from '../layouts/AuthedLanding';
import SingleSelect from '../components/inputs/SingleSelect';
import Countries from '../utils/data/countries';
import Api from '../utils/api';
import { pushToHome } from '../utils/next';
import { useRouter } from 'next/router';

const Content = ({ id }) => {
  const [company_name, set_company_name] = useState('');
  const [phone_number, set_phone_number] = useState('');
  const [country, set_country] = useState('');
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const errors = [];
  if (company_name.length === 0) {
    errors.push('Please enter your Company name.');
  }

  if (phone_number.length === 0) {
    errors.push('Please enter your Phone Number.');
  }

  if (country.length === 0) {
    errors.push('Please enter your Country.');
  }
  const router = useRouter();

  const isInvalid = errors.length > 0;

  const handleSubmit = event => {
    event.preventDefault();
    setHasSubmittedOnce(true);
    if (!isInvalid) {
      Api.updateOnboarding(id, {
        company_name,
        phone_number,
        country,
        has_on_boarded: true,
      }).then(() => {
        pushToHome(router);
      });
    }
  };

  return (
    <div className="page-card-wrapper ">
      <EuiCard title="On Boarding Form">
        <EuiSpacer size="l" />

        <EuiForm
          isInvalid={hasSubmittedOnce && isInvalid && true}
          error={hasSubmittedOnce && isInvalid && errors}
          component="form"
          onSubmit={handleSubmit}>
          <EuiFormRow label="Country" fullWidth>
            <SingleSelect
              fullWidth
              placeholder="Select Country"
              options={Countries}
              value={country}
              onChange={country => {
                return set_country(country);
              }}
            />
          </EuiFormRow>
          <EuiFormRow label="Name" fullWidth>
            <EuiFieldText
              value={company_name}
              onChange={e => set_company_name(e.target.value)}
              fullWidth
            />
          </EuiFormRow>
          <EuiFormRow label="Phone" fullWidth>
            <EuiFieldText
              value={phone_number}
              onChange={e => set_phone_number(e.target.value)}
              type="tel"
              fullWidth
            />
          </EuiFormRow>
          <EuiSpacer />
          <EuiButton type="submit" fill>
            Submit
          </EuiButton>
        </EuiForm>
      </EuiCard>
    </div>
  );
};

const Page = props => {
  const Component = AuthedLanding;

  return (
    <>
      <Seo title="On Boarding" />
      <Component>
        <Content {...props} />
      </Component>
    </>
  );
};

export default Page;
