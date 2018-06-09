import React, { Component } from 'react';
import style from './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <a className={style.logo} href="/">London Transport</a>
      </header>
    )
  }
}
