import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
