import React, { useState, useEffect, useMemo } from 'react';

import Fingerprint2 from 'fingerprintjs2';

import { getPersonDetail, postLike } from '@/services';

import css from './index.module.less';

export default function PersonDetail(props) {

  const [fingerPrint, setFingerPrint] = useState('');
  const [personInfo, setPersonInfo] = useState({});

  const participantId = useMemo(() => {
    return props.match.params.id;
  }, [props.match.params.id]);

  useEffect(() => {
    Fingerprint2.get(function (components) {
      const values = components.map(function (component, index) {
        if (index === 0) {
          //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
          return component.value.replace(/\bNetType\/\w+\b/, '');
        }
        return component.value;
      });
      // 生成最终id murmur
      const murmur = Fingerprint2.x64hash128(values.join(''), 31);
      setFingerPrint(murmur);
    });
  }, []);

  const fetchPersonDetail = async () => {
    const res = await getPersonDetail({
      guestId: fingerPrint,
      participantId: participantId
    });
    setPersonInfo(res);
  };

  useEffect(() => {
    if (fingerPrint) {
      try {
        fetchPersonDetail();
      } catch (error) {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fingerPrint]);

  const onLikeClick = async () => {
    const postData = {
      guestId: fingerPrint,
      participantId: participantId,
      status: personInfo.status ? 0 : 1
    };
    try {
      await postLike(postData);
      fetchPersonDetail();
    } catch (error) {}
  };

  return (
    <div className={css['person-detail-wrapper']}>
      <h1>
        {personInfo.name}:&nbsp;&nbsp;{personInfo.title}
      </h1>
      <div className={css['pic']}>
        <img src={personInfo.imgUrl} alt="" />
      </div>
      <div className={css['like-wrapper']} onClick={onLikeClick}>
        {personInfo.status ? (
          <i className="iconfont icon-like2" style={{ color: 'red' }} />
        ) : (
          <i className="iconfont icon-like1" />
        )}
        &nbsp;&nbsp;
        {personInfo.praiseNum}
      </div>
      <div className={css['info']}>
        <p dangerouslySetInnerHTML={{ __html: personInfo.introduction }}></p>
      </div>
    </div>
  );
}
