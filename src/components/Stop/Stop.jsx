import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class StopComponent extends Component {

  render() {
    const {id, name} = this.props;
    return <Link to={`/stop/${id}`}>{name}</Link>
    // return this.props.match.params.id;
  }
}


export const Stop = withRouter(StopComponent);
