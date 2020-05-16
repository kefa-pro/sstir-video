import React from 'react';

import css from './index.module.less';

export default function PersonItem(props) {
  const { img, title } = props;

  return (
    <div className={css['person-item-wrapper']}>
      <div className={css['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <h5 className={css['title']}>{title}</h5>
    </div>
  );
}
