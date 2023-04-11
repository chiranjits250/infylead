import _ from 'lodash';
import Analytics from './analytics';
import AxiosInstance from './axios';
import Config from './config';

function sendEvent({ type, ...payload }) {
  return AxiosInstance.post(`/events/${type}/`, payload, {
    silent: true,
  }).catch(console.error);
}

async function getLeads(payload: any) {
  Analytics.trackSearch(payload);
  return AxiosInstance.post('/leads/leads/', payload, {
    silent: true,
  });
}

async function getUsers(payload: any) {
  return AxiosInstance.get('/users/', {
    params: payload,
    silent: true,
  });
}

async function updateUser(id, payload: any) {
  return AxiosInstance.patch(`/users/${id}/`, payload, {});
}

async function deleteUser(id) {
  return AxiosInstance.delete(`/users/${id}/`);
}

async function updateOnboarding(id, payload: any) {
  return AxiosInstance.patch(`/users-onboarding/${id}/`, payload, {});
}

async function getJobTitles(search: any) {
  return AxiosInstance.get('/leads/search-job-titles/', {
    silent: true,
    params: {
      name: search,
    },
  });
}

async function getCompanies(search: any) {
  return AxiosInstance.get('/leads/search-companies/', {
    silent: true,
    params: {
      name: search,
    },
  });
}

async function getLocations(search: any) {
  return AxiosInstance.get('/leads/search-locations/', {
    silent: true,
    params: {
      name: search,
    },
  });
}

async function getTechnologies(search: any) {
  return AxiosInstance.get('/leads/search-technologies/', {
    silent: true,
    params: {
      name: search,
    },
  });
}

function downloadViaLink(filename) {
  return response => {
    // create a Blob from the response data
    const url = window.URL.createObjectURL(new Blob([response.data]));
    // create a link element
    const link = document.createElement('a');
    // set the link's href to the URL created above
    link.href = url;
    // set the link's download attribute to the desired file name
    link.setAttribute('download', filename);
    // append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
}

async function downloadAsCsv(payload: any, limit: number) {
  return AxiosInstance.post(
    '/leads/export-csv/',
    { ...payload, limit },
    {
      message: 'Downloading CSV will take around a minute',
    }
  ).then(downloadViaLink('leads.csv'));
}

async function downloadUsers() {
  return AxiosInstance.get(
    '/users/download_users/',{
      message: 'Downloading all Users',
    }
  ).then(downloadViaLink('users.csv'));
}

async function getEmail(id: string) {
  return AxiosInstance.get('/leads/email/', {
    silent: true,
    params: {
      id,
    },
  });
}


async function getPhone(id: string, phone) {
  return AxiosInstance.get('/leads/phone/', {
    silent: true,
    params: {
      id,
      phone
    },
  });
}

async function sendGoogleAuthToken(token: string) {
  return AxiosInstance.post(
    '/auth/google-auth/',
    {},
    {
      silent: true,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }
  );
}

async function getMe(cookie: any) {
  return AxiosInstance.get('/auth/me/', {
    silent: true,
    headers: cookie ? { cookie } : undefined,
  });
}
export function is403(error: any) {
  return error.response?.status === 403;
}

export function is404(error: any) {
  return error.response?.status === 404;
}


async function createShortUrl(payload: any) {
  return AxiosInstance.post(`/short-urls/`, payload,)
}

async function getShortUrls(payload: any) {
  return AxiosInstance.get('/short-urls/', {
    params: payload,
    silent: true,
  })
}

async function updateShortUrl(id, payload: any) {
  return AxiosInstance.patch(`/short-urls/${id}/`, payload, {})
}



async function deleteShortUrl(id) {
  return AxiosInstance.delete(`/short-urls/${id}/`)
}
const Api = {
  getShortUrls,
  updateShortUrl,
  deleteShortUrl,
  createShortUrl,

  getMe,
  sendGoogleAuthToken,
  getLeads,
  getEmail,
  getTechnologies,
  downloadAsCsv,
  getJobTitles,
  getCompanies,
  getLocations,
  sendEvent,
  getUsers,
  updateUser,
  deleteUser,
  getPhone,
  updateOnboarding,
  downloadUsers
};


export default Api;
