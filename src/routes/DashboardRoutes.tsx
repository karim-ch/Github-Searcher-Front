import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { githubStore, persistedGithubStore } from '../redux/github';
import { PersistGate } from 'redux-persist/integration/react';
import Github from '../pages/github';

const DashboardRoutes = () => (
  <Provider store={githubStore}>
    <Switch>
      <Provider store={githubStore}>
        <PersistGate persistor={persistedGithubStore}>
          <Route exact path='/' component={Github} />
          {/*Define Other Dashboard routes here (ie. /githubRepo )*/}
        </PersistGate>
      </Provider>
    </Switch>
  </Provider>
);

export default DashboardRoutes;
