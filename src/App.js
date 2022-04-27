import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import HYAppFooter from '@/components/app-footer';
import HYAppHeader from '@/components/app-header';

import '@/assets/css/reset.css';
import { HashRouter } from 'react-router-dom';

const App = memo(() => {
  return (
    <HashRouter>
      <HYAppHeader></HYAppHeader>
      {renderRoutes(routes)}
      <HYAppFooter></HYAppFooter>
    </HashRouter>
  );
});

export default App;
