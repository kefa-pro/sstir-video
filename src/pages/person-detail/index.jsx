import React, { useState, useEffect } from 'react';

import css from './index.module.less';

import Fingerprint2 from 'fingerprintjs2';

export default function PersonDetail() {
  const personInfo = {
    name: '李英贤：仰望星空，探索航天医学的奥秘',
    pic: 'https://www.kepuchina.cn/zt/zb/wskxj20/04/202004/W020200416547689529268.jpg',
    org: '中国科学院上海巴斯德研究所',
    age: 45,
    sexy: '女',
    domain: '生物信息',
    dept: '病原大数据实验室',
    position: '研究所',
    study: `科研妈妈讲故事以女科技工作者结合各自专业领域选取一个科普视角，聚焦日常生活、
    当下热点，给孩子介绍科学方法、科学常识，解释某种科学现象、科学原理，讲述知名
    科学人物、感人科研瞬间等，以通俗易懂的语言，有趣生动的故事，清新有爱的表述，
    传递科学理念、弘扬科学精神，为孩子埋下科学的种子。`
  };

  const [fingerPrint, setFingerPrint] = useState('');

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

  const onLikeClick = () => {
    console.log('like...', fingerPrint);
  };

  return (
    <div className={css['person-detail-wrapper']}>
      <h1>{personInfo.name}</h1>
      <div className={css['pic']}>
        <img src={personInfo.pic} alt="" />
      </div>
      <div className={css['like-wrapper']}>
        <i className="iconfont icon-like" onClick={onLikeClick} /> 115
      </div>
      <div className={css['info']}>
        <div className={css['row']}>
          <div className={css['label']}>单位:</div>
          <div className={css['content']}>{personInfo.org}</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>年龄:</div>
          <div className={css['content']}>{personInfo.age}岁</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>性别:</div>
          <div className={css['content']}>{personInfo.sexy}</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>专业领域:</div>
          <div className={css['content']}>{personInfo.domain}</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>部门:</div>
          <div className={css['content']}>{personInfo.dept}</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>职务职称:</div>
          <div className={css['content']}>{personInfo.position}</div>
        </div>

        <div className={css['row']}>
          <div className={css['label']}>研究方向:</div>
          <div className={css['content']}>{personInfo.study}</div>
        </div>
      </div>
    </div>
  );
}
