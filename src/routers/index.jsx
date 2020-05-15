import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from '@/components/private-route';
// 使用自定义Hook实现
import ScrollToTop from '@/components/scroll-to-top';

import lazyLoad from '@/utils/lazy-load';

const Home = lazyLoad(import('@/pages/home'));

export default function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}
