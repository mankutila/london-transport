import React from 'react';
import style from './Lines.css';
import {LineItem} from '../LineItem/LineItem'

export const Lines = (props) => {
  const {name = 'Unnamed', routeSections = []} = props;
  return (
    <div className={style.lines}>
      {props.data.map((item, index) => <LineItem key={index} {...item} />)}
    </div>
  )
}
