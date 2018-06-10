import React, { Component } from 'react';
import style from './Body.css';
import {DataList} from '../DataList/DataList'

export class Body extends Component {
  render() {
    return (
      <main className={style.main}>
        {this.props.body}
        {/*<DataList />*/}
      </main>
    )
  }
}
