import React from 'react';
import PropTypes from 'prop-types';
import style from './Body.css';

export const Body = (props) => {
  return (
    <main className={style.main}>
      {props.body}
    </main>
  );
};

Body.propTypes = {
  body: PropTypes.element
};
