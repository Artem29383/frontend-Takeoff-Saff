import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routs from '../../routs';
import routes from '../../constants/routes'

const AppRoutes = () => {
  return (
    <Switch>
      {routs.map(({ path, exact, component: Component }) => {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => (
                  <Component {...props} />
                )}
              />
            );
          })
      }
      <Redirect to={routes.polls} />
    </Switch>
  );
};

export default AppRoutes;
