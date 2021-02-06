import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <DashboardRoutes />
        </Route>
        {/*Define other app Routes Here (ie. login) .. */}
      </Switch>
    </Router>
  );
};
export default Routes;
