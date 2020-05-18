import React from 'react';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import classnames from 'classnames';

import css from './index.module.less';

export default function Breadcrumb(props) {
  const { paths } = props;

  const history = useHistory();

  const location = useLocation();

  const params = useParams();

  const { pathname } = location;
  console.log(location, params);

  let originPath = [
    {
      name: '首页',
      path: '/home'
    }
  ];

  const getPathList = () => {
    if (pathname === '/content/video-list') {
      return originPath.concat([
        {
          name: '视频列表'
        }
      ]);
    }

    if (pathname === '/content/person-list') {
      return originPath.concat([
        {
          name: '嘉宾列表'
        }
      ]);
    }

    if (pathname.startsWith('/content/person/')) {
      return originPath.concat([
        {
          name: '嘉宾列表',
          path: '/content/person-list'
        },
        {
          name: '嘉宾介绍'
        }
      ]);
    }

    return originPath;
  };

  const pathList = getPathList() || [];

  const onClick = (item) => {
    if (item.path) {
      history.push(item.path);
    }
  };

  console.log(pathList);
  return (
    <div className={css['breadcrumb-wrapper']}>
      <ul className={css['breadcrumb-container']}>
        {pathList.map((item, index) => (
          <li
            className={classnames([
              css['item'],
              {
                [css['click']]: item.path,
                [css['last']]: index === paths.length
              }
            ])}
            key={index}
            onClick={() => onClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}