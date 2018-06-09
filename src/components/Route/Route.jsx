import React from 'react';
import style from './Route.css';

export const Route = (props) => {
  const {name = 'Unknown'} = props;
  return (
    <div className={style.route }>
      {name}
    </div>
  )
}
