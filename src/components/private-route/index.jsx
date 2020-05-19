import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { getToken } from '@/utils/auth';

export default function PrivateRoute({ render, ...rest }) {
  const token = getToken();
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: '/content/login',
              state: {
                from: location
              }
            }}
          />
        )
      }
    />
  );
}
