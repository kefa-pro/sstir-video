import React from 'react';
import css from './index.module.less';
export default function VideoItem(props) {
  const { img, category, title } = props;

  return (
    <div className={css['video-item-wrapper']}>
      <div className={css['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <h5 className={css['category']}>{category}</h5>
      <h5 className={css['title']}>{title}</h5>
    </div>
  );
}
