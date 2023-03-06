import Seo from '../components/Seo';
import { useState } from 'react';
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiCheckbox,
  EuiText,
  EuiSpacer,
  useGeneratedHtmlId,
  EuiCard,
} from '@elastic/eui';
import Toast from '@omkar111111/components/Toast';
import TextAreaField from '../components/inputs/TextAreaField';
import Analytics from '../utils/analytics';
import UnAuthedLanding from '../layouts/UnAuthedLanding';
import AuthedLanding from '../layouts/AuthedLanding';
import SingleSelect from '../components/inputs/SingleSelect';
import { employeeOptions } from '../utils/data/options';
import Footer, { Skype, Social, Whatsapp } from '../components/Footer';

// first_name, last_name, company_name, corporate_email, phone, employee_size, looking_for_b2b_leads

export function ContactForm() {
  const [state, setstate] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    corporate_email: '',
    phone: '',
    employee_size: '',
    looking_for_b2b_leads: false,
  });
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const errors = [];

  if (state.first_name.length === 0) {
    errors.push('Please enter your First Name.');
  }

  if (state.last_name.length === 0) {
    errors.push('Please enter your Last Name.');
  }

  if (state.company_name.length === 0) {
    errors.push('Please enter Company Name.');
  }

  if (state.corporate_email.length === 0) {
    errors.push('Please enter Corporate Email.');
  }

  if (state.phone.length === 0) {
    errors.push('Please enter your Mobile Number.');
  }

  if (state.employee_size.length === 0) {
    errors.push('Please enter Employee Size.');
  }

  const isInvalid = errors.length > 0;

  const onChange = props => {
    setstate({
      ...state,
      ...props,
    });
  };

  const handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    onChange({
      [name]: value,
    });
  };

  const id = useGeneratedHtmlId();

  const handleSubmit = event => {
    event.preventDefault();
    setHasSubmittedOnce(true);
    if (!isInvalid) {
      Analytics.trackContactUs(state);
      Toast.success('Thank you for Contacting Us.');
    }
  };

  return (
    <EuiForm
      isInvalid={hasSubmittedOnce && isInvalid && true}
      error={hasSubmittedOnce && isInvalid && errors}
      className=""
      component="form"
      onSubmit={handleSubmit}>
      <EuiFormRow label="First Name" fullWidth>
        <EuiFieldText
          name="first_name"
          value={state.first_name}
          onChange={handleInputChange}
          fullWidth
        />
      </EuiFormRow>

      <EuiFormRow label="Last Name" fullWidth>
        <EuiFieldText
          name="last_name"
          value={state.last_name}
          onChange={handleInputChange}
          fullWidth
        />
      </EuiFormRow>
      <EuiFormRow label="Company Name" fullWidth>
        <EuiFieldText
          name="company_name"
          value={state.company_name}
          onChange={handleInputChange}
          fullWidth
        />
      </EuiFormRow>

      <EuiFormRow label="Corporate Email" fullWidth>
        <EuiFieldText
          name="corporate_email"
          fullWidth
          value={state.corporate_email}
          onChange={handleInputChange}
        />
      </EuiFormRow>

      <EuiFormRow fullWidth label="Mobile Number">
        <EuiFieldText
          fullWidth
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
        />
      </EuiFormRow>
      <EuiFormRow label="Employees">
        <SingleSelect
          compressed
          placeholder="Select Employees"
          options={employeeOptions}
          isClearable={false}
          value={state.employee_size}
          onChange={employee_size => {
            return onChange({ employee_size });
          }}
        />
      </EuiFormRow>

      <EuiFormRow label="Looking for B2B leads" fullWidth>
        <EuiCheckbox
          id={id}
          name="looking_for_b2b_leads"
          checked={state.looking_for_b2b_leads}
          onChange={handleInputChange}
        />
      </EuiFormRow>

      <EuiSpacer />
      <EuiButton type="submit" fill>
        Contact Us
      </EuiButton>
    </EuiForm>
  );
}

const Content = () => {
  return (
    <div className="page-card-wrapper ">
      <div>
        <EuiText>
          <p>
            We’re available. Day or night. At InfyLead we want you to know just
            how dedicated we are to your marketing needs. We’re here 24X7 to
            address any questions or concerns you might have. You can also
            contact us at
          </p>
          <div>
            <b>United States: </b>812 spruce st, #6894, Indianapolis, IN, 46203,
            USA
          </div>
          <div>
            <b>India: </b>17 Kalyan Nagar Rd, Lumding, Assam, 782447, INDIA
          </div>
          <div>
            <b>Email: </b>{' '}
            <a className="italic underline hover:underline" href={Social.email}>
              info@infylead.com
            </a>
          </div>
          <div className=" mt-2 flex space-x-2">
            <Whatsapp />
            <Skype />
          </div>

        </EuiText>
      </div>
      <EuiSpacer />
      <EuiSpacer />

      <EuiCard title="Contact Us">
        <EuiSpacer size="l" />
        <ContactForm />
      </EuiCard>
    </div>
  );
};

const Page = ({ is_authenticated }) => {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding;

  return (
    <>
      <Seo title="Contact Us" />
      <Component>
        <Content />
        <Footer />
      </Component>
    </>
  );
};

export default Page;
