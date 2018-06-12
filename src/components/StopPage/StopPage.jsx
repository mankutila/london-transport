import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class StopPageComponent extends Component {
  render () {
    return (
      <React.Fragment>
        <p onClick={this.props.history.goBack}>Back</p>
        <p>{this.props.match.params.id}</p>
      </React.Fragment>
    );
  }
}

export const StopPage = withRouter(StopPageComponent);
