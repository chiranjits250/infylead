import Seo from '../components/Seo';
import { useState } from 'react';
import {
  EuiForm,
  EuiFormRow,
  EuiPagination,
  EuiDataGrid,
  EuiButtonIcon,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiPortal,
  EuiTitle,
  EuiButton,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiPopoverTitle,
  EuiButtonEmpty,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiText,
  EuiModalHeaderTitle,
} from '@elastic/eui';
import AuthedDashboard from '../layouts/AuthedDashboard';
import CenteredSpinner from '../components/CenteredSpinner';
import DashboardWrapper from '../components/DashboardWrapper';
import { FilterPanelWrapper } from '../components/FilterPanel';
import Api from '../utils/api';
import Select from '../components/inputs/Select';
import { generateListWithIdAndValue } from '../utils/missc';
import SearchField from '../components/inputs/SearchField';
import Hooks from '@omkar111111/utils/hooks';
import Toast from '@omkar111111/components/Toast';
import NumberField from '../components/inputs/NumberField';
import CheckboxBoxField from '../components/inputs/CheckBoxField';
import Language from '@omkar111111/utils/language';

function FilterPanel({ search, onChange, page, total_pages }) {
  return (
    <EuiForm>
      <EuiFormRow display="rowCompressed" label="Search">
        <SearchField
          compressed
          placeholder="Search by Name or Email"
          onApply={search => {
            return onChange({ search });
          }}
          value={search}
          onChange={search => onChange({ search }, false)}
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
    </EuiForm>
  );
}

const columns = [
  {
    id: 'name',
    display: 'Name',
  },
  {
    id: 'email',
    display: 'Email',
  },
  {
    id: 'email_views',
    display: 'Email Views',
  },
  {
    id: 'email_views_limit',
    display: 'Email Views Limit',
  },

  {
    id: 'phone_views',
    display: 'Phone Views',
  },
  {
    id: 'phone_views_limit',
    display: 'Phone Views Limit',
  },
  {
    id: 'record_exports',
    display: 'Record Exports',
  },
  {
    id: 'record_exports_limit',
    display: 'Record Exports Limit',
  },
  {
    id: 'show_all_pages',
    display: 'Show All Pages',
  },
  {
    id: 'is_banned',
    display: 'Is Banned',
  },
  {
    id: 'company_name',
    display: 'Company Name',
  },
  {
    id: 'phone_number',
    display: 'Phone Number',
  },
  {
    id: 'country',
    display: 'Country',
  },
  {
    id: 'created_at',
    display: 'Joined At',
  },
];

function formatDate(value: any) {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  //@ts-ignore
  if (dd < 10) dd = '0' + dd;

  //@ts-ignore
  if (mm < 10) mm = '0' + mm;

  const formatted = dd + '/' + mm + '/' + yyyy;

  return formatted;
}

const DataPanel = ({ data, onEdit, onDelete }) => {
  const [visibleColumns, setVisibleColumns] = useState(() =>
    columns.map(({ id }) => id)
  );

  const FlyoutRowCell = rowIndex => {
    let flyout;
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
    const rowData = data[rowIndex.rowIndex];

    const [email_views_limit, set_email_views_limit] = useState(
      rowData.email_views_limit
    );
    const [phone_views_limit, set_phone_views_limit] = useState(
      rowData.phone_views_limit
    );
    const [record_exports_limit, set_record_exports_limit] = useState(
      rowData.record_exports_limit
    );

    const [is_banned, set_is_banned] = useState(rowData.is_banned);

    const [show_all_pages, set_show_all_pages] = useState(
      rowData.show_all_pages
    );

    if (isFlyoutOpen) {
      const handleSubmit = event => {
        event.preventDefault();
        Api.updateUser(rowData.id, {
          email_views_limit,
          phone_views_limit,
          record_exports_limit,
          is_banned,
          show_all_pages,
        }).then(({ data }) => {
          Toast.success('Successfully Updated User');
          setIsFlyoutOpen(false);
          onEdit(rowData.id, data);
        });
      };

      flyout = (
        <EuiPortal>
          <EuiFlyout
            size="s"
            ownFocus
            onClose={() => setIsFlyoutOpen(!isFlyoutOpen)}>
            <EuiFlyoutHeader hasBorder>
              <EuiTitle size="m">
                <h2>{rowData.name}</h2>
              </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
              <EuiForm component="form" onSubmit={handleSubmit}>
                <EuiFormRow label="Email Views Limit" fullWidth>
                  <NumberField
                    value={email_views_limit}
                    onChange={e => set_email_views_limit(e)}
                    fullWidth
                  />
                </EuiFormRow>
                <EuiFormRow label="Phone Views Limit" fullWidth>
                  <NumberField
                    value={phone_views_limit}
                    onChange={e => set_phone_views_limit(e)}
                    fullWidth
                  />
                </EuiFormRow>
                <EuiFormRow label="Record Exports Limit" fullWidth>
                  <NumberField
                    value={record_exports_limit}
                    onChange={e => set_record_exports_limit(e)}
                    fullWidth
                  />
                </EuiFormRow>
                <EuiFormRow label="Is Banned" fullWidth>
                  <CheckboxBoxField
                    value={is_banned}
                    onChange={e => set_is_banned(e)}
                    fullWidth
                  />
                </EuiFormRow>
                <EuiFormRow label="Show all Pages" fullWidth>
                  <CheckboxBoxField
                    value={show_all_pages}
                    onChange={e => set_show_all_pages(e)}
                    fullWidth
                  />
                </EuiFormRow>
                <EuiSpacer />
                <EuiButton type="submit" fullWidth fill>
                  Save
                </EuiButton>
              </EuiForm>
            </EuiFlyoutBody>
          </EuiFlyout>
        </EuiPortal>
      );
    }

    return (
      <>
        <EuiButtonIcon
          color="text"
          iconType="documentEdit"
          iconSize="s"
          aria-label="Edit"
          onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
        />
        {flyout}
      </>
    );
  };

  const leadingControlColumns = [
    {
      id: 'Edit',
      width: 36,
      headerCellRender: () => null,
      rowCellRender: FlyoutRowCell,
    },
  ];

  const trailingControlColumns = [
    {
      id: 'actions',
      width: 40,
      headerCellRender: () => null,
      rowCellRender: function RowCellRender(rowIndex) {
        const rowData = data[rowIndex.rowIndex];

        const [isPopoverOpen, setIsPopoverOpen] = useState(false);
        const closePopover = () => setIsPopoverOpen(false);
        const [isModalVisible, setIsModalVisible] = useState(false);

        const closeModal = () => {
          setIsModalVisible(false);
        };

        const openModal = () => {
          setIsModalVisible(true);
        };

        const confirmDelete = () => {
          Api.deleteUser(rowData.id).then(() => {
            Toast.success('Successfully Delete User');
            closeModal();
            onDelete(rowData.id);
          });
        };

        return (
          <div>
            {isModalVisible && (
              <EuiModal onClose={closeModal}>
                <EuiModalHeader>
                  <EuiModalHeaderTitle>Confirm Delete</EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalBody>
                  <EuiText>
                    Are you sure you want to delete User <b>{rowData.name}</b>?
                    The action is <b>irreversible</b>.
                  </EuiText>
                </EuiModalBody>
                <EuiModalFooter>
                  <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>
                  <EuiButton color="danger" onClick={confirmDelete}>
                    Delete
                  </EuiButton>
                </EuiModalFooter>
              </EuiModal>
            )}

            <EuiPopover
              isOpen={isPopoverOpen}
              anchorPosition="upCenter"
              panelPaddingSize="s"
              button={
                <EuiButtonIcon
                  aria-label="show actions"
                  iconType="boxesHorizontal"
                  color="text"
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                />
              }
              closePopover={closePopover}>
              <EuiPopoverTitle>Actions</EuiPopoverTitle>
              <div>
                <button
                  onClick={() => {
                    closePopover();
                    openModal();
                  }}>
                  <EuiFlexGroup
                    alignItems="center"
                    component="span"
                    gutterSize="s">
                    <EuiFlexItem grow={false}>
                      <EuiButtonIcon
                        aria-label="Delete selected items"
                        iconType="trash"
                        color="text"
                      />
                    </EuiFlexItem>
                    <EuiFlexItem>Delete</EuiFlexItem>
                  </EuiFlexGroup>
                </button>
              </div>
            </EuiPopover>
          </div>
        );
      },
    },
  ];

  return (
    <EuiDataGrid
      aria-label="Users Grid"
      trailingControlColumns={trailingControlColumns}
      leadingControlColumns={leadingControlColumns}
      columnVisibility={{ visibleColumns, setVisibleColumns }}
      columns={columns}
      rowCount={data.length}
      renderCellValue={({ rowIndex, columnId }) => {
        const el = data[rowIndex];

        const value = el[columnId];

        if (columnId == 'is_banned' || columnId == 'show_all_pages') {
          if (value) {
            return 'Yes';
          } else {
            return 'No';
          }
        }

        if (columnId == 'created_at') {
          return formatDate(value);
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
  );
};

const Content = () => {
  const [state, setstate] = useState({
    page: 1,
    search: '',
  });

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total_pages, setTotalPages] = useState(1);

  function updateState(change) {
    setstate(prev => ({ ...prev, ...change }));
  }

  function goToFirstPage() {
    updateState({ page: 1 });
  }

  const onApplyFilters = state => {
    async function fetchData() {
      setLoading(true);
      const data = (await Api.getUsers(state)).data;
      const { total_pages, results } = data;
      setTotalPages(total_pages);

      if (state.page > total_pages) {
        goToFirstPage();
      }

      setData(results);
      setLoading(false);
    }
    fetchData();
  };

  Hooks.useDidMount(() => onApplyFilters(state));

  const onChange = (change, applyFilters = true) => {
    updateState(change);
    if (applyFilters) {
      onApplyFilters({ ...state, ...change });
    }
  };

  const props = {
    ...state,
    data,
    onChange,
    onApplyFilters,
    total_pages,
    onDelete: id => {
      const newdata = [...data].filter(x => x.id !== id);
      setData(newdata);
    },
    onEdit: (id, updated_record) => {
      const newdata = [...data];
      const index = newdata.indexOf(Language.findById(newdata, id));
      newdata[index] = { ...newdata[index], ...updated_record };
      setData(newdata);
    },
  };

  return (
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
                justifyContent: 'end',
              }}
              pageCount={total_pages}
              activePage={state.page - 1}
              onPageClick={page => onChange({ page: page + 1 })}
            />
          </>
        )}
      </div>
    </DashboardWrapper>
  );
};

const Page = () => {
  return (
    <>
      <Seo title="Admin" />
      <AuthedDashboard>
        <Content />
      </AuthedDashboard>
    </>
  );
};

export default Page;
