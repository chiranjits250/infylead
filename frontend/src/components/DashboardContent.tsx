// import Dashboard from '../components/Dashboard';
import _ from 'lodash';
import { EuiPagination } from '@elastic/eui';
import { useState } from 'react';
import CenteredSpinner from './CenteredSpinner';
import { FilterPanelWrapper, FilterPanel } from './FilterPanel';
import DashboardWrapper from './DashboardWrapper';
import DataPanel from './DataPanel';
import Api, { is403 } from '../utils/api';
import { initial_leads } from '../utils/data/leads';
import useSubscriptionModal from './useSubscriptionModal';
import { isStringOrListNotEmpty } from '../utils/missc';
import Language from '@omkar111111/utils/language';

function canQuery(state) {
  return Object.values(_.omit(state, 'page')).some(isStringOrListNotEmpty);
}

const DashboardContent = ({ show_all_pages, record_exports_limit, record_exports }) => {
  const [state, setstate] = useState({
    page: 1,
    // job_title: 'founder',
    job_title: [],
    company: [],
    location: [],
    not_job_title: [],
    not_location: [],
    // employees: '51,100',
    employees: [],
    // industry: '5567cd467369644d39040000',
    industry: [],

    hiring_for: [],
    revenue: '',
    keyword: '',
    name: '',

    technology: [],
    email_status: [],
    funding: [],
  });

  const { modal, showModal } = useSubscriptionModal();

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(initial_leads);
  const [total_pages, setTotalPages] = useState(1);

  function updateState(change) {
    setstate(prev => ({ ...prev, ...change }));
  }

  function goToFirstPage() {
    updateState({ page: 1 });
  }

  function resetState() {
    goToFirstPage();
    setTotalPages(1);
    setData([]);
  }

  const onApplyFilters = state => {
    async function fetchData() {
      setLoading(true);
      const data = (await Api.getLeads(state)).data;
      const { total_pages, leads } = data;
      setTotalPages(total_pages);

      if (state.page > total_pages) {
        goToFirstPage();
      }
      setData(leads);
      setLoading(false);
    }

    if (canQuery(state)) {
      fetchData();
    } else {
      resetState();
    }
  };

  const onChange = (change, applyFilters = true) => {
    const newState = { ...state, ...change };
    if (!show_all_pages && newState.page > 2) {
      showModal();
    } else {
      updateState(change);
      if (applyFilters) {
        onApplyFilters(newState);
      }
    }
  };

  const props = {
    ...state,
    data,
    onChange,
    canQuery: canQuery(state),
    onApplyFilters,
    total_pages,
    record_exports_limit, record_exports,
    onGotEmail: (id, email) => {
      const newdata = [...data];
      Language.findById(newdata, id).email = email;
      setData(newdata);
    },
    onGotPhone: (id, phone) => {
      const newdata = [...data];
      Language.findById(newdata, id).company_phone = phone;
      // @ts-ignore
      Language.findById(newdata, id).show_phone = true;
      setData(newdata);
    },
    onDownloadAsCsv: limit => {
      return Api.downloadAsCsv(state, limit).catch(e => {
        if (is403(e)) {
          showModal();
        }
      });
    },
  };

  return (
    <>
      {modal}
      <DashboardWrapper>
        <FilterPanelWrapper>
          <FilterPanel {...props} />
        </FilterPanelWrapper>
        <div className="w-full">
          {isLoading ? (
            <CenteredSpinner />
          ) : (
            <>
              <div className="table-height">
                <DataPanel {...props} />
              </div>
              <EuiPagination
                aria-label={'Pagination'}
                style={{
                  display: 'flex',
                  // alignItems: 'center',
                  justifyContent: 'end',
                }}
                // total_pages={10}
                pageCount={total_pages}
                activePage={state.page - 1}
                onPageClick={page => onChange({ page: page + 1 })}
              />
            </>
          )}
        </div>
      </DashboardWrapper>
    </>
  );
};

export default DashboardContent;
