import React from 'react';
import PropTypes from 'prop-types';
import { LineItem } from '../LineItem/LineItem';
import style from './Lines.css';

export const Lines = (props) => {
  return (
    <div className={style.lines}>
      {props.data.map((item, index) => <LineItem key={index} {...item} />)}
    </div>
  );
};

Lines.propTypes = {
  data: PropTypes.array
};
