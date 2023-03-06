import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Router from 'next/router';
import NextApp from 'next/app';
import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import Chrome from '../components/chrome';
import { Theme } from '../components/theme';
import { globalStyles } from '../styles/global.styles';

import Hooks from '@omkar111111/utils/hooks';
import Analytics from '../utils/analytics';
import Api, { is403, is404 } from '../utils/api';
import Links from '../utils/data/links';
/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */

const EuiApp = ({ Component, pageProps }) => {
  Hooks.useDidMount(() => {
    Analytics.trackVisit();
    Analytics.trackExceptions();
    Analytics.trackTimeSpent();
  });

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KVH0P9C1NK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KVH0P9C1NK', {
              page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <Global styles={globalStyles} />
      <Theme>
        <Chrome>
          <EuiErrorBoundary>
            <Component {...pageProps} />
          </EuiErrorBoundary>
        </Chrome>
      </Theme>
    </>
  );
};

function redirect(isServer, res, page) {
  if (isServer) {
    res.writeHead(302, {
      Location: page,
    });

    res.end();
  } else {
    // client
    Router.push(page);
  }
  return {};
}

EuiApp.getInitialProps = async props => {
  const {
    ctx,
    Component: { getInitialProps },
  } = props;

  const isServer = ctx.req;
  const res = ctx.res;
  const path = ctx.asPath;

  const isAdminPage = path.startsWith(Links.admin);
  const isBannedPage = path.startsWith(Links.banned);
  const isContactUsPage = path.startsWith(Links.contactUs);
  const isDeletedPage = path.startsWith(Links.deleted);
  const is404Page = path.startsWith(Links.notFound);
  const isOnboardingPage = path.startsWith(Links.onboarding);

  const getResponse = async () => {
    try {
      if (isServer) {
        return [(await Api.getMe(ctx.req.headers.cookie)).data, false];
      } else {
        return [(await Api.getMe(undefined)).data, false];
      }
    } catch (error) {
      if (is404(error)) {
        return [{}, true];
      }
      throw error;
    }
  };

  const [data, is_user_deleted] = await getResponse();

  const { is_banned, is_admin, has_on_boarded, is_authenticated } = data;

  if (isBannedPage || is404Page || isDeletedPage) {
    return {};
  } else if (is_user_deleted) {
    return redirect(isServer, res, Links.deleted);
  } else if (is_banned) {
    return redirect(isServer, res, Links.banned);
  } else if (!is_admin && isAdminPage) {
    return redirect(isServer, res, Links.notFound);
  } else {
    const appProps = await NextApp.getInitialProps(props);

    const componentPageProps = getInitialProps
      ? await getInitialProps(ctx)
      : {};

    const result = {
      ...appProps,
      pageProps: {
        ...data,
        ...componentPageProps,
      },
    };

    if (isContactUsPage || isOnboardingPage) {
      return result;
    } else if (is_authenticated && !has_on_boarded) {
      return redirect(isServer, res, Links.onboarding);
    } else {
      return result;
    }
  }
};

export default EuiApp;
