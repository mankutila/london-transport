import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import style from './Stop.css';

export class StopComponent extends Component {
  render () {
    const { id, name, inbound } = this.props;
    return <Link to={`/stop/${id}`} className={`${style.stoplink} ${inbound ? style.inbound : ''}`}>{name}</Link>;
  }
}

export const Stop = withRouter(StopComponent);
