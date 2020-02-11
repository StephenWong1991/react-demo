import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import routesConfig from './config';
import AllComponents from '@/pages';

function CRouter() {
  return (
    <Switch>
      {
        routesConfig.menus.map(r => {
          const route = r => {
            const Component = AllComponents[r.component];
            return (
              <Route
                key={r.key}
                exact
                path={r.key}
                render={props => {
                  return (
                    <DocumentTitle title={r.title}>
                      <Component {...props} />
                    </DocumentTitle>
                  );
                }}
              />
            )
          }
          return route(r);
        })
      }
    </Switch>
  );
}

export default CRouter;
