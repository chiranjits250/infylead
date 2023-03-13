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
import { isEmptyString } from '../utils/data/validators'
import Messages from '../utils/messages'

const employeeOptions = [
  {
      id: '1',
      value: '1',
  },
  {
      id: '2 to 5',
      value: '2 to 5',
  },
  {
      id: '6 to 10',
      value: '6 to 10',
  },
  {
      id: '11 to 25',
      value: '11 to 25',
  },
  {
      id: '26 to 50',
      value: '26 to 50',
  },
  {
      id: '51 to 200',
      value: '51 to 200',
  },
  {
      id: '201 to 1,000',
      value: '201 to 1,000',
  },
  {
      id: '1,001 to 10,000',
      value: '1,001 to 10,000',
  },
  {
      id: '10,001+',
      value: '10,001+',
  }
]

export function Employees({ value, onChange }) {
  return (<EuiFormRow fullWidth label="Employees">
      <SingleSelect
          fullWidth
          placeholder="Select Employees"
          options={employeeOptions}
          isClearable={false}
          value={value}
          onChange={employee_size => {
              return onChange(employee_size)
          }}
      />
  </EuiFormRow>
  )
}

const Content = ({ id }) => {
  const [company_name, set_company_name] = useState('');
  const [phone_number, set_phone_number] = useState('');
  const [country, set_country] = useState('');
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [employee_size, set_employee_size] = useState('')

  const errors = [];
  if (company_name.length === 0) {
    errors.push('Please enter your Company name.');
  }

  
  if (isEmptyString(employee_size)) {
    errors.push(Messages.EMPLOYEE_SIZE_IN_VALID)
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
        employee_size,
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
          <EuiFormRow label="Company Name" fullWidth>
            <EuiFieldText
              value={company_name}
              onChange={e => set_company_name(e.target.value)}
              fullWidth
            />
          </EuiFormRow>
          <Employees
            value={employee_size}
            onChange={employee_size => {
              return set_employee_size(employee_size)
            }}
          />
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
