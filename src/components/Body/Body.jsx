import React, { Component } from 'react';
import style from './Body.css';

export class Body extends Component {
  render() {
    return (
      <main className={style.main}>
        {this.props.body}
      </main>
    )
  }
}
