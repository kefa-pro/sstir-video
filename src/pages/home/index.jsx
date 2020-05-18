import React, { useCallback } from 'react';
import HomeHeader from './comonents/header';
import Swiper from './comonents/swiper';

import Panel from '@/components/panel';
import VideoItem from '@/components/video-item';
import PersonItem from '@/components/person-item';

import css from './index.module.less';

export default function Home(props) {
  const handleVideoMoreClick = useCallback(() => {
    props.history.push('/content/video-list');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePersonMoreClick = useCallback(() => {
    props.history.push('/content/person-list');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videoList = [
    {
      id: 1,
      img: 'https://www.kepuchina.cn/zt/zb/wskxj20/01/202004/W020200416560373994581.jpg',
      category: '第1期',
      title: '高福：创新创业创造，我们一起来征服病毒'
    },
    {
      id: 2,
      img: 'https://www.kepuchina.cn/zt/zb/wskxj20/04/202004/W020200416548820914165.jpg',
      category: '第1期',
      title: '高福：创新创业创造，我们一起来征服病毒'
    },
    {
      id: 3,
      img: 'https://www.kepuchina.cn/zt/zb/wskxj20/04/202004/W020200416548820914165.jpg',
      category: '第1期',
      title: '高福：创新创业创造，我们一起来征服病毒'
    },
    {
      id: 4,
      img: 'https://www.kepuchina.cn/zt/zb/wskxj20/04/202004/W020200416548820914165.jpg',
      category: '第1期',
      title: '高福：创新创业创造，我们一起来征服病毒'
    },
    {
      id: 5,
      img: 'https://www.kepuchina.cn/zt/zb/wskxj20/04/202004/W020200416548820914165.jpg',
      category: '第1期',
      title: '高福：创新创业创造，我们一起来征服病毒'
    }
  ];

  return (
    <div className={css['home-wrapper']}>
      <HomeHeader />
      <div className={css['container']}>
        <div className={css['swiper-wrapper']}>
          <Swiper />
        </div>
        <div className={css['list-wrapper']}>
          <Panel title="精彩内容" onMore={handleVideoMoreClick}>
            {videoList.map((video, index) => (
              <VideoItem key={index} {...video} />
            ))}
          </Panel>
        </div>
        <div className={css['list-wrapper']}>
          <Panel title="嘉宾" onMore={handlePersonMoreClick}>
            {videoList.map((person, index) => (
              <PersonItem key={index} {...person} />
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}
