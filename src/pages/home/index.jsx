import React, { useCallback, useState, useEffect } from 'react';
import HomeHeader from './comonents/header';
import Swiper from './comonents/swiper';
import { message } from 'antd';

import Panel from '@/components/panel';
import VideoItem from '@/components/video-item';
import PersonItem from '@/components/person-item';
import { getHome } from '@/services';
import css from './index.module.less';

export default function Home(props) {
  const [videoList, setVideoList] = useState([]);
  const [personList, setPersonList] = useState([]);
  const [preVideoList, setPreVideoList] = useState([]);

  useEffect(() => {
    const getHomeAd = async () => {
      try {
        const { contents, participants, preContents } = await getHome();
        setVideoList(
          contents.map((item) => {
            return {
              id: item.contentId,
              img: item.imgUrl,
              category: item.issue,
              title: item.title,
              url: item.url
            };
          })
        );
        setPersonList(
          participants.map((item) => {
            return {
              id: item.participantId,
              name: item.name,
              img: item.imgUrl,
              title: item.title,
              introduction: item.introduction
            };
          })
        );
        setPreVideoList(preContents);
      } catch (err) {
        message.error(err);
      }
    };
    getHomeAd();
  }, []);

  const handleVideoMoreClick = useCallback(() => {
    props.history.push('/content/video-list');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePersonMoreClick = useCallback(() => {
    props.history.push('/content/person-list');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {personList.map((person, index) => (
              <PersonItem key={index} {...person} />
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}
