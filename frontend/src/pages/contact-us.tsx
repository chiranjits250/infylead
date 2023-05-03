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
import CheckboxBoxField from '../components/inputs/CheckBoxField';
import Links from '../utils/data/links';
import { isEmptyString } from '../utils/data/validators'

// first_name, last_name, company_name, email, phone, employee_size, terms

export function ContactForm() {
  const [state, setstate] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    phone: '',
    employee_size: '',
    terms: false,
  })

  const [requirements, setrequirements] = useState('')

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false)

  const errors = []

  if (state.first_name.length === 0) {
    errors.push('Please enter your First Name.')
  }

  if (state.last_name.length === 0) {
    errors.push('Please enter your Last Name.')
  }

  if (state.company_name.length === 0) {
    errors.push('Please enter Company Name.')
  }

  if (state.email.length === 0) {
    errors.push('Please enter Corporate Email.')
  }

  if (state.phone.length === 0) {
    errors.push('Please enter your Mobile Number.')
  }

  if (state.employee_size.length === 0) {
    errors.push('Please enter Employee Size.')
  }

  if (state.terms === false) {
    errors.push('Kindly agree to our terms and conditions and privacy policy.')
  }


  if (isEmptyString(requirements)) {
    errors.push('Please enter your Requirements.')
  }


  const isInvalid = errors.length > 0

  const onChange = props => {
    setstate({
      ...state,
      ...props,
    })
  }

  const handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const r = {
      [name]: value,
    }
    onChange(r)
  }

  // const id = useGeneratedHtmlId();

  const handleSubmit = event => {
    event.preventDefault()
    setHasSubmittedOnce(true)
    if (!isInvalid) {
      const result = { ...state }
      result['requirements'] = requirements

      Analytics.trackContactUs(result)
      Toast.success('Thank you for Contacting Us.')
    }
  }

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
          name="email"
          fullWidth
          value={state.email}
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
      <EuiFormRow label="Employees" fullWidth>
        <SingleSelect
          fullWidth
          placeholder="Select Employees"
          options={employeeOptions}
          isClearable={false}
          value={state.employee_size}
          onChange={employee_size => {
            return onChange({ employee_size })
          }}
        />
      </EuiFormRow>
      <EuiFormRow label="Requirements" fullWidth>
        <TextAreaField
          name="requirements"
          fullWidth
          value={requirements}
          onChange={(x) => setrequirements(x)}
        />
      </EuiFormRow>
      <div
        className="euiFormRow euiFormRow--fullWidth euiFormRow--hasLabel"
        id="i0f379831-bca9-11ed-b557-217f1bc3b9e7-row">
        <div className="euiFormRow__labelWrapper">
          <label
            className="text-left euiFormLabel euiFormRow__label"
            id="i0f379831-bca9-11ed-b557-217f1bc3b9e7-label"
            htmlFor="i0f379831-bca9-11ed-b557-217f1bc3b9e7">
            I agree to the{' '}
            <a className='font-bold' href={Links.terms} target="_blank">
              terms and conditions
            </a>{' '}and{' '}
            <a className='font-bold' href={Links.privacy} target="_blank">
              privacy policy
            </a>
          </label>
        </div>
        <div className="euiFormRow__fieldWrapper">
          <div className="euiCheckbox euiCheckbox--noLabel flex">
            <CheckboxBoxField
              className="flex"
              value={state.terms}
              onChange={v => onChange({ terms: v })}
            />
            <div className="euiCheckbox__square" />
          </div>
        </div>
      </div>

      <EuiSpacer />
      <EuiButton type="submit" fill>
        Contact Us
      </EuiButton>
    </EuiForm>
  )
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
