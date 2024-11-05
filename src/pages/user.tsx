import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { getUser } from 'src/client/api';
import { CONFIG } from 'src/config-global';

import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

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
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserView />
    </>
  );
}
