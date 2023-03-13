import {
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiIcon,
  EuiSpacer,
} from '@elastic/eui';
import _, { max, min } from 'lodash';
import { useState } from 'react';
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiButtonEmpty,
} from '@elastic/eui';
import Api from '../utils/api';
import SingleSelect from './inputs/SingleSelect';
import NumberField from './inputs/NumberField';
import SearchField from './inputs/SearchField';
import { withMultiAsyncSearchHoc } from '../utils/hocs/withAsyncSearchHoc';
import {
  industryOptions,
  employeeOptions,
  revenueOptions,
  emailStatusOptions,
  fundingOptions,
} from '../utils/data/options';
import Select from './inputs/Select';
import { generateListWithIdAndValue } from '../utils/missc';
import MultiSelect from './inputs/MultiSelect';
import Toast from '@omkar111111/components/Toast';

const jobTitleInitialOptions = [
  { id: 'founder', value: 'Founder' },
  { id: 'founder and ceo', value: 'Founder And CEO' },
  { id: 'founding partner', value: 'Founding Partner' },
  { id: 'founder ceo', value: 'Founder CEO' },
  { id: 'founder and president', value: 'Founder And President' },
  { id: 'founder and director', value: 'Founder And Director' },
  {
    id: 'founder and managing director',
    value: 'Founder And Managing Director',
  },
  { id: 'founder and owner', value: 'Founder And Owner' },
  { id: 'founder director', value: 'Founder Director' },
  { id: 'founder owner', value: 'Founder Owner' },
  { id: 'founder president', value: 'Founder President' },
  { id: 'founder and managing partner', value: 'Founder And Managing Partner' },
  { id: 'founding director', value: 'Founding Director' },
  {
    id: 'founder and creative director',
    value: 'Founder And Creative Director',
  },
  { id: 'founder and principal', value: 'Founder And Principal' },
  { id: 'founder and cto', value: 'Founder And Cto' },
  { id: 'fourth grade teacher', value: 'Fourth Grade Teacher' },
  { id: 'founder managing director', value: 'Founder Managing Director' },
  {
    id: 'founder and executive director',
    value: 'Founder And Executive Director',
  },
  { id: 'founding member', value: 'Founding Member' },
];

const JobTitleSelect = withMultiAsyncSearchHoc(
  Api.getJobTitles,
  jobTitleInitialOptions
);

const initialCompanyOptions = [
  { id: '5fcd2cf3ed78c700f9383e4e', value: 'Apple' },
  { id: '60be858374409400a4a03ee9', value: 'Appen' },
  { id: '55922f89736964186547ba00', value: 'Apparel Group' },
  { id: '5ed29e6d746a300001071ff2', value: 'Applied Materials' },
  { id: '54a1203169702d8ed4301902', value: 'Applicantz' },
  { id: '624f004d8d9ed500a5735f29', value: 'AppleOne Employment Services' },
  {
    id: '5fc8d865e11ce900010b31cd',
    value: 'Jobs In Dubai | Abu Dhabi | Sharjah & UAE',
  },
  { id: '54a1284569702d954837f900', value: 'Approach People Recruitment' },
  { id: '61817056e54cc200c2c8623b', value: 'Apparel Resources' },
  { id: '55f8af9df3e5bb195b002366', value: 'Appinventiv' },
];
const CompanySelect = withMultiAsyncSearchHoc(
  Api.getCompanies,
  initialCompanyOptions
);

const initialLocationOptions = [
  { id: 'United States', value: 'United States' },
  { id: 'United Kingdom', value: 'United Kingdom' },
  { id: 'United Arab Emirates', value: 'United Arab Emirates' },
  { id: 'Union, New Jersey', value: 'Union, New Jersey' },
  { id: 'Union City, California', value: 'Union City, California' },
  { id: 'Uniontown, Pennsylvania', value: 'Uniontown, Pennsylvania' },
  { id: 'Universal City, California', value: 'Universal City, California' },
  { id: 'Uničov, Czech Republic', value: 'Uničov, Czech Republic' },
  { id: 'Universal City, Texas', value: 'Universal City, Texas' },
  { id: 'Uniondale, New York', value: 'Uniondale, New York' },
  { id: 'Union City, Georgia', value: 'Union City, Georgia' },
  { id: 'Uniontown, Ohio', value: 'Uniontown, Ohio' },
  { id: 'Union, Kentucky', value: 'Union, Kentucky' },
  { id: 'Union City, Tennessee', value: 'Union City, Tennessee' },
  { id: 'Union, South Carolina', value: 'Union, South Carolina' },
  { id: 'Union, Missouri', value: 'Union, Missouri' },
  { id: 'University Place, Washington', value: 'University Place, Washington' },
  { id: 'Union, Ohio', value: 'Union, Ohio' },
  { id: 'Union, Canada', value: 'Union, Canada' },
  { id: 'Union, West Virginia', value: 'Union, West Virginia' },
];

const LocationSelect = withMultiAsyncSearchHoc(
  Api.getLocations,
  initialLocationOptions
);

const initialTechnologies = [
  { id: 'google_analytics', value: 'Google Analytics' },
  { id: 'hotjar', value: 'Hotjar' },
  { id: 'piwik', value: 'Piwik' },
  { id: 'quantcast', value: 'Quantcast' },
  { id: 'statcounter', value: 'StatCounter' },
  { id: 'yandex_metrika', value: 'Yandex Metrica' },
  { id: 'audioeye', value: 'AudioEye' },
  { id: 'crazyegg', value: 'CrazyEgg' },
  { id: 'omniture_adobe', value: 'Omniture (Adobe)' },
  { id: 'yahoo_analytics', value: 'Yahoo Analytics' },
  { id: 'segment_io', value: 'Segment.io' },
  { id: 'clicky', value: 'Clicky' },
  { id: 'mixpanel', value: 'Mixpanel' },
  { id: 'leadfeeder', value: 'Leadfeeder' },
  {
    id: 'microsoft_application_insights',
    value: 'Microsoft Application Insights',
  },
  { id: 'realtracker', value: 'RealTracker' },
  { id: 'mouseflow', value: 'MouseFlow' },
  { id: 'accessibe', value: 'accessiBe' },
  { id: 'chartbeat', value: 'Chartbeat' },
  { id: 'comscore', value: 'comScore' },
];

const TechnologySelect = withMultiAsyncSearchHoc(
  Api.getTechnologies,
  initialTechnologies
);

const MAX_LEADS = 2500;

function DownloadButtonModal({
  onDownloadAsCsv,
  canQuery,
  record_exports_limit,
  record_exports,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [numberValue, setNumberValue] = useState(null);
  const [error, setError] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setError('');
    setNumberValue(null);
  };

  const handleNumberChange = value => {
    if (value === null) {
      setNumberValue(value);
      setError('');
    } else if (value < 1) {
      setNumberValue(1);
      setError('Number must be greater than 1');
    } else if (value > MAX_LEADS) {
      setNumberValue(MAX_LEADS);
      setError('Number must be less than ' + MAX_LEADS);
    } else {
      setNumberValue(value);
      setError('');
    }
  };

  const handleSubmit = () => {
    if (numberValue === null) {
      setError('Number is required');
      return;
    }

    const left = record_exports_limit - record_exports;
    if (!(numberValue <= left)) {
      return Toast.error(
        `You can export at most ${left} leads as per your plan.`
      );
    }
    onDownloadAsCsv(numberValue);
    toggleModal();
  };

  const showErrors = error !== '';

  const errors = showErrors ? [error] : undefined;

  return (
    <>
      <EuiButton disabled={!canQuery} onClick={toggleModal}>
        Download CSV
      </EuiButton>
      {isModalVisible && (
        <EuiModal onClose={toggleModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Download</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <div>
              <EuiFormRow
                label="Number of Leads to Download"
                isInvalid={showErrors}
                error={errors}>
                <NumberField
                  placeholder="Maximum Record Download Limit is 2500."
                  isInvalid={showErrors}
                  value={numberValue}
                  onChange={handleNumberChange}
                />
              </EuiFormRow>
            </div>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButtonEmpty onClick={toggleModal}>Cancel</EuiButtonEmpty>
            <EuiButton fill onClick={handleSubmit}>Submit</EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
}

export function FilterPanelWrapper({ children }) {
  return (
    <div
      className="sidebar-height h-full pr-4 overflow-y-auto"
      style={{
        minWidth: 320,
      }}>
      {children}
    </div>
  );
}

function LocationComponent({ location, not_location, onChange }) {
  const [showExclude, setShowExclude] = useState(false);

  return (
    <>
      <EuiFormRow display="rowCompressed" label="Location">
        <LocationSelect
          compressed
          placeholder="eg, United States"
          value={location}
          onChange={location => {
            return onChange({ location });
          }}
        />
      </EuiFormRow>
      <button
        className="primary-link"
        onClick={() => setShowExclude(!showExclude)}>
        Exclude{' '}
        {showExclude ? (
          <EuiIcon size="s" type="arrowUp" />
        ) : (
          <EuiIcon size="s" type="arrowDown" />
        )}
      </button>
      {showExclude && (
        <>
          <LocationSelect
            compressed
            placeholder="eg, United States"
            value={not_location}
            onChange={not_location => {
              return onChange({ not_location });
            }}
          />
          <EuiSpacer />
        </>
      )}
    </>
  );
}

function JobComponent({ job_title, not_job_title, onChange }) {
  const [showExclude, setShowExclude] = useState(false);

  return (
    <>
      <EuiFormRow display="rowCompressed" label="Job Title">
        <JobTitleSelect
          compressed
          value={job_title}
          placeholder="eg, CEO"
          onChange={job_title => {
            return onChange({ job_title });
          }}
        />
      </EuiFormRow>
      <button
        className="primary-link"
        onClick={() => setShowExclude(!showExclude)}>
        Exclude{' '}
        {showExclude ? (
          <EuiIcon size="s" type="arrowUp" />
        ) : (
          <EuiIcon size="s" type="arrowDown" />
        )}
      </button>
      {showExclude && (
        <>
          <JobTitleSelect
            compressed
            value={not_job_title}
            placeholder="eg, CEO"
            onChange={not_job_title => {
              return onChange({ not_job_title });
            }}
          />
          <EuiSpacer />
        </>
      )}
    </>
  );
}

export function FilterPanel(props) {
  const {
    record_exports_limit, record_exports,
    hiring_for,
    keyword,
    name,
    job_title,
    company,
    employees,
    not_job_title,
    revenue,
    industry,
    technology,
    email_status,
    funding,
    onChange,
    page,
    canQuery,
    total_pages,
    onDownloadAsCsv,
  } = props;

  return (
    <EuiForm>
      <EuiFormRow display="rowCompressed" label="Keyword Search">
        <SearchField
          compressed
          placeholder="eg, Doctor, CEO 🔎"
          onApply={keyword => {
            return onChange({ keyword });
          }}
          value={keyword}
          onChange={keyword => onChange({ keyword }, false)}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Industry">
        <MultiSelect
          compressed
          placeholder="Select Industry"
          options={industryOptions}
          value={industry}
          onChange={industry => {
            return onChange({ industry });
          }}
        />
      </EuiFormRow>

      <LocationComponent {...props} />
      <JobComponent {...props} />

      <EuiFormRow display="rowCompressed" label="Technology">
        <TechnologySelect
          compressed
          placeholder="eg, Microsoft Azure"
          value={technology}
          onChange={technology => {
            return onChange({ technology });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Employees">
        <MultiSelect
          compressed
          placeholder="Select Employees"
          options={employeeOptions}
          value={employees}
          onChange={employees => {
            return onChange({ employees });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Revenue">
        <SingleSelect
          compressed
          placeholder="Select Revenue"
          options={revenueOptions}
          value={revenue}
          onChange={revenue => {
            return onChange({ revenue });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Email Status">
        <MultiSelect
          compressed
          placeholder="Select Email Status"
          options={emailStatusOptions}
          value={email_status}
          onChange={email_status => {
            return onChange({ email_status });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="I am Hiring For">
        <JobTitleSelect
          compressed
          placeholder="eg, CEO"
          value={hiring_for}
          onChange={hiring_for => {
            return onChange({ hiring_for });
          }}
        />
      </EuiFormRow>
      <EuiFormRow display="rowCompressed" label="Name">
        <SearchField
          placeholder="eg, John"
          compressed
          onApply={name => {
            return onChange({ name });
          }}
          value={name}
          onChange={name => {
            return onChange({ name }, false);
          }}
        />
      </EuiFormRow>
      <EuiFormRow display="rowCompressed" label="Company">
        <CompanySelect
          placeholder="eg, Apple"
          value={company}
          compressed
          onChange={company => {
            return onChange({ company });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Funding">
        <MultiSelect
          compressed
          placeholder="Select Funding"
          options={fundingOptions}
          value={funding}
          onChange={funding => {
            return onChange({ funding });
          }}
        />
      </EuiFormRow>

      <EuiFormRow display="rowCompressed" label="Page Count">
        <Select
          placeholder="Select Page"
          compressed
          options={generateListWithIdAndValue(total_pages)}
          value={page}
          onChange={page => {
            page = Number(page);
            return onChange({ page: page });
          }}
        />
      </EuiFormRow>
      {/* <div style={{height:'300px'}}></div> */}
      <DownloadButtonModal
        {...{ record_exports_limit, record_exports }}
        canQuery={canQuery}
        onDownloadAsCsv={onDownloadAsCsv}
      />

      {/* <EuiButton
              onClick={() => {
                onDownloadAsCsv(5);
              }}>
              Download as CSV
            </EuiButton> */}
    </EuiForm>
  );
}
