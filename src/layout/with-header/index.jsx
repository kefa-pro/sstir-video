import React from 'react';
import { Route } from 'react-router-dom';
import lazyLoad from '@/utils/lazy-load';
import PrivateRoute from '@/components/private-route';

import PageHeader from '@/components/header';
import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/footer';

import css from './index.module.less';

const Login = lazyLoad(import('@/pages/login'));

const VideoList = lazyLoad(import('@/pages/video-list'));
const VideoDetail = lazyLoad(import('@/pages/video-detail'));

const PersonList = lazyLoad(import('@/pages/person-list'));
const PersonDetail = lazyLoad(import('@/pages/person-detail'));

const News = lazyLoad(import('@/pages/news'));

const VideoAdmin = lazyLoad(import('@/pages/admin/video'));
const PersonAdmin = lazyLoad(import('@/pages/admin/person'));

export default function WithHeaderLayout(props) {
  const { paths = [{ name: '视频', path: '/video-list' }] } = props;

  return (
    <div className={css['with-header-layout-wrapper']}>
      <PageHeader />
      <Breadcrumb paths={paths} />
      <div className={css['layout-container']}>
        <Route path="/content/login" render={(props) => <Login {...props} />} />

        <Route path="/content/video-list" render={(props) => <VideoList {...props} />} />
        <Route path="/content/video/:id" render={(props) => <VideoDetail {...props} />} />

        <Route path="/content/person-list" render={(props) => <PersonList {...props} />} />
        <Route
          name="person-detail"
          path="/content/person/:id"
          render={(props) => <PersonDetail {...props} />}
        />

        <Route path="/content/news/:id" render={(props) => <News {...props} />} />

        <PrivateRoute path="/content/admin/video" render={(props) => <VideoAdmin {...props} />} />
        <PrivateRoute path="/content/admin/person" render={(props) => <PersonAdmin {...props} />} />
      </div>
      <Footer />
    </div>
  );
}
