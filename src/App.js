import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import store from './store';

import HYAppFooter from '@/components/app-footer';
import HYAppHeader from '@/components/app-header';

import '@/assets/css/reset.css';
import { HashRouter } from 'react-router-dom';

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader></HYAppHeader>
        {renderRoutes(routes)}
        <HYAppFooter></HYAppFooter>
      </HashRouter>
    </Provider>
  );
});

export default App;
