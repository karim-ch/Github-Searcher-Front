import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <AppRoutes />
        </Route>
        {/*Define other app Routes Here (ie. login) .. */}
      </Switch>
    </Router>
  );
};
export default Routes;
