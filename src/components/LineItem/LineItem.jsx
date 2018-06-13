import React from 'react';
import style from './LineItem.css';
import { Link } from 'react-router-dom';
import { getRightDate } from '../../helpers/utils';

export const LineItem = (props) => {
  const { id, name = 'Unnamed', arrival } = props;
  const date = arrival && getRightDate(arrival.expectedArrival);
  return (
    <div className={`${style['line-item']} ${ arrival ? style['line-item-stop'] : ''}`}>
      <div className={style['line-name']}>
        <Link to={`/line/${id}`} key={id}>{name}</Link>
      </div>
      {arrival && <div className={style.arrival}>{date}</div>}
    </div>
  );
};
