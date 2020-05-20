import React from 'react';
import css from './index.module.less';
export default function VideoItem(props) {
  const { img, category, title, url } = props;

  const onClick = () => {
    window.open(url);
  };

  return (
    <div className={css['video-item-wrapper']} onClick={onClick}>
      <div className={css['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <h5 className={css['category']}>第{category}期</h5>
      <h5 className={css['title']}>{title}</h5>
    </div>
  );
}
