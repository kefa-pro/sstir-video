import React from 'react';
import { Route } from 'react-router-dom';

import lazyLoad from '@/utils/lazy-load';

import Footer from '@/components/footer';

const Home = lazyLoad(import('@/pages/home'));

export default function CommonLayout(props) {
  return (
    <div>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Footer />
    </div>
  );
}
