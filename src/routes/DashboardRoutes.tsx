import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { githubStore, persistedGithubStore } from '../redux';
import { PersistGate } from 'redux-persist/integration/react';
import Github from '../pages/github';

const DashboardRoutes = () => (
  <Provider store={githubStore}>
    <PersistGate persistor={persistedGithubStore}>
      <Switch>
        <Route exact path='/' component={Github} />
        {/*Define Other Dashboard routes here (ie. /githubRepo )*/}
      </Switch>
    </PersistGate>
  </Provider>
);

export default DashboardRoutes;
