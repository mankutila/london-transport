import React from 'react';
import style from './LineItem.css';
import { Link } from 'react-router-dom';

export const LineItem = (props) => {
  const { id, name = 'Unnamed' } = props;
  return (
    <div className={style['line-item']}>
      <div className={style['line-name']}><Link to={`/line/${id}`} key={id}>{name}</Link></div>
    </div>
  );
};
