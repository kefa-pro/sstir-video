import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.less';

export default function Panel(props) {
  const { title, onMore } = props;
  return (
    <div className={css['panel-wrapper']}>
      <div className={css['header']}>
        <div className={css['title']}>{title || '精彩内容'}</div>
        <div className={css['more']} onClick={onMore}>
          更多
        </div>
      </div>
      <div className={css['content-wrapper']}>{props.children}</div>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  onMore: PropTypes.func.isRequired
};
