import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { getUser } from 'src/client/api';
import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

export default function Page() {
  useEffect(() => {
    getUser().then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <Helmet>
        <title> {`${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
        />
        <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
