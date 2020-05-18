import React from 'react';
import { useHistory } from 'react-router-dom';
import css from './index.module.less';

export default function PersonItem(props) {
  const { img, title, id } = props;

  const history = useHistory();

  const onClick = () => {
    history.push(`/content/person/${id}`);
  };

  return (
    <div className={css['person-item-wrapper']} onClick={onClick}>
      <div className={css['img-wrapper']}>
        <img src={img} alt="" />
      </div>
      <h5 className={css['title']}>{title}</h5>
    </div>
  );
}
