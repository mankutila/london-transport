import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStopsOnLine } from '../../helpers/fetchUtils'

class LinePageComponent extends Component {
  state = {
    stops: []
  }

  componentDidMount() {
    this.getStops(this.props.match.params.id);
  }

  async getStops(lineId) {
    this.setState({stops: await getStopsOnLine(lineId)});
  }

  render() {
    return (
      <React.Fragment>
        <p onClick={this.props.history.goBack}>Back</p>
        <p>{this.props.match.params.id}</p>
        <p>Inbound</p>
        {this.state.stops && this.state.stops[0] && this.state.stops[0].stations.map((stop) => {
          return <p key={stop.id}>{stop.name}</p>
        })}
        <p>Outbound</p>
        {this.state.stops && this.state.stops[1] && this.state.stops[1].stations.map((stop) => {
          return <p key={stop.id}>{stop.name}</p>
        })}
      </React.Fragment>
    )
  }
}


export const LinePage = withRouter(LinePageComponent);
