import React from 'react';

import Panel from '@/components/panel';
import PersonItem from '@/components/person-item';
import css from './index.module.less';

export default function PersonList() {
  const personList = [
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
    },
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
    },
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
    <div className={css['person-list-wrapper']}>
      <Panel title="所有嘉宾">
        {personList.map((video, index) => (
          <PersonItem key={index} {...video} />
        ))}
      </Panel>
    </div>
  );
}
