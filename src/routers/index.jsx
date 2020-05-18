import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from '@/components/private-route';
// 使用自定义Hook实现
import ScrollToTop from '@/components/scroll-to-top';

import CommonLayout from '@/layout/common';
import WithHeaderLayout from '@/layout/with-header';

export default function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/home" render={(props) => <CommonLayout {...props} />} />
        <Route path="/content" render={(props) => <WithHeaderLayout {...props} />} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </Router>
  );
}
