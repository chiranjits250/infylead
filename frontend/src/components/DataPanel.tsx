import _ from 'lodash';
import { useState } from 'react';
import { EuiDataGrid, EuiLink } from '@elastic/eui';
import { useLazyAxios } from '../utils/axios/use-axios';
import Api, { is403 } from '../utils/api';
import useSubscriptionModal from './useSubscriptionModal';

function getDomainName(link: string): string {
  const url = new URL(link);
  let domainName = url.hostname;

  if (domainName.startsWith('www.')) {
    domainName = domainName.substr(4);
  }

  return domainName;
}

function getLastElement(path) {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

const columns = [
  {
    id: 'company_name',
    display: 'Company Name',
  },
  {
    id: 'company_website',
    display: 'Website',
  },
  {
    id: 'location',
    display: 'Location',
  },
  {
    id: 'name',
    display: 'Name',
  },
  {
    id: 'headline',
    display: 'Job Title',
  },
  {
    id: 'email',
    display: 'Email',
  },
  {
    id: 'linkedin_url',
    display: 'LinkedIn URL',
  },
  {
    id: 'company_phone',
    display: 'Phone',
  },
];

const DataPanel = ({ data, onGotEmail, onGotPhone }) => {
  const slicedData = data;

  const [visibleColumns, setVisibleColumns] = useState(() =>
    columns.map(({ id }) => id)
  );
  const { modal, showModal } = useSubscriptionModal();

  return (
    <>
      {modal}
      <EuiDataGrid
        aria-label="Leads Grid"
        columnVisibility={{ visibleColumns, setVisibleColumns }}
        columns={columns}
        rowCount={data.length}
        renderCellValue={({ rowIndex, columnId }) => {
          const el = slicedData[rowIndex];
          const { isLoading, fetch } = useLazyAxios(() => Api.getEmail(el.id));
          const { isLoading: isLoadingPhone, fetch: fetchPhone } = useLazyAxios(
            () => Api.getPhone(el.id, el.company_phone)
          );
          const value = el[columnId];

          if (columnId === 'company_website' && value) {
            return (
              <EuiLink target={'_blank'} href={value}>
                {getDomainName(value)}
              </EuiLink>
            );
          } else if (columnId === 'linkedin_url' && value) {
            return (
              <EuiLink target={'_blank'} href={value}>
                {getLastElement(value)}
              </EuiLink>
            );
          } else if (columnId === 'company_linkedin_url' && value) {
            return (
              <EuiLink target={'_blank'} href={value}>
                {getLastElement(value)}
              </EuiLink>
            );
          } else if (columnId === 'email' && value === 'Get Email') {
            return (
              <EuiLink
                onClick={async () => {
                  try {
                    const data = await fetch();
                    onGotEmail(el.id, data['email']);
                  } catch (error) {
                    if (is403(error)) {
                      showModal();
                    }
                  }
                }}>
                {isLoading ? 'Getting Email' : value}
              </EuiLink>
            );
          } else if (columnId === 'company_phone' && !el.show_phone) {
            return (
              <EuiLink
                onClick={async () => {
                  try {
                    const data = await fetchPhone();
                    onGotPhone(el.id, data['phone']);
                  } catch (error) {
                    if (is403(error)) {
                      showModal();
                    }
                  }
                }}>
                {isLoadingPhone ? 'Getting Phone' : 'Get Phone'}
              </EuiLink>
            );
          }
          return value ?? null;
        }}
        toolbarVisibility={{
          showColumnSelector: true,
          showSortSelector: true,
          showFullScreenSelector: true,
          showDisplaySelector: true,
        }}
      />
    </>
  );
};

export default DataPanel;
