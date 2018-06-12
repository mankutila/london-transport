import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

export class StopComponent extends Component {
  render () {
    const { id, name } = this.props;
    return <Link to={`/stop/${id}`}>{name}</Link>;
  }
}

export const Stop = withRouter(StopComponent);
