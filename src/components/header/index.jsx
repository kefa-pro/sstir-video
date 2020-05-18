import React from 'react';

import logo from './img/logo.png';

import css from './index.module.less';

export default function PageHeader() {
  return (
    <div className={css['page-header-wrapper']}>
      <div className={css['container']}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
