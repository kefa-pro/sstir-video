import React from 'react';

import css from './index.module.less';

export default function Loading() {
  return (
    <div className={css['loading-wrapper']}>
      <div className={css['loading-img']} />
      <span>正在加载...</span>
    </div>
  );
}
