import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRightDate } from '../../helpers/utils';
import style from './LineItem.css';

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

LineItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  arrival: PropTypes.object
};
