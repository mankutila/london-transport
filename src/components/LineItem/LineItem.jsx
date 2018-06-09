import React from 'react';
import style from './LineItem.css';
import { Route } from '../Route/Route'

export const LineItem = (props) => {
  const {name = 'Unnamed', routeSections = []} = props;
  return (
    <div className={style['line-item']}>
      <div className={style['line-name']}>{name}</div>
      <div className={style.routes}>
        {routeSections.map((route, index) => <Route key={index} {...route} />)}
      </div>
    </div>
  )
}
