import React from 'react';
import style from './LineItem.css';
import { Link } from 'react-router-dom'

export const LineItem = (props) => {
  const {id, name = 'Unnamed', routeSections = []} = props;
  return (
    <div className={style['line-item']}>
      <div className={style['line-name']}>{name}</div>
      <div className={style.routes}>
        {routeSections.map((route, index) => <Link to={`/line/${id}`} key={index}>{route.name}</Link>)}
      </div>
    </div>
  )
}
