import React from 'react';
import style from './Header.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <a className={style.logo} href="/">London Transport</a>
    </header>
  );
};

