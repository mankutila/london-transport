import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Stop.css';

export const Stop = (props) => {
  const { id, name, inbound } = props;
  return <Link to={`/stop/${id}`} className={`${style.stoplink} ${inbound ? style.inbound : ''}`}>{name}</Link>;
};

Stop.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  inbound: PropTypes.boolean
};
