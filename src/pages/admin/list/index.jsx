import React from 'react';
import { Link } from 'react-router-dom';

import css from './index.module.less';

export default function AdminList() {
  return (
    <div className={css['admin-list-wrapper']}>
      <ul>
        <li>
          <Link to="/content/admin/video">视频</Link>
        </li>
        <li>
          <Link to="/content/admin/person">嘉宾</Link>
        </li>
      </ul>
    </div>
  );
}
