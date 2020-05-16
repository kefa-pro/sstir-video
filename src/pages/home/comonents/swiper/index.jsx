import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import icon from './img/icon.png';

import css from './index.module.less';

export default function Swiper() {
  const history = useHistory();
  const handleClick = (url) => {
    if (url.startsWith('http://')) {
      window.open(url);
    } else {
      history.push(url);
    }
  };
  return (
    <div className={css['swiper-container']}>
      <Carousel
        defaultControlsConfig={{
          prevButtonStyle: { display: 'none' },
          nextButtonStyle: { display: 'none' },
          pagingDotsStyle: {
            width: 20
          }
        }}
        autoplay
      >
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide1"
          onClick={() => handleClick('http://jd.com')}
        />
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide2"
          onClick={() => handleClick('/news')}
        />
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide3"
        />
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide4"
        />
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide5"
        />
        <img
          className={css['img']}
          alt=""
          src="https://via.placeholder.com/200/ffffff/c0392b/&text=slide6"
        />
      </Carousel>
      <img className={css['icon']} src={icon} alt="" />
    </div>
  );
}
