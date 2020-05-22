import React, { useState, useEffect } from 'react';
import Panel from '@/components/panel';
import VideoItem from '@/components/video-item';
import { getVideoList } from '@/services';

import css from './index.module.less';

export default function VieoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await getVideoList();
      setVideoList(
        list.map((item) => {
          return {
            id: item.contentId,
            img: item.imgUrl,
            category: item.issue,
            title: item.title,
            url: item.url
          };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <div className={css['video-list-wrapper']}>
      <Panel title="所有视频">
        {videoList.map((video, index) => (
          <VideoItem key={index} {...video} />
        ))}
      </Panel>
    </div>
  );
}
