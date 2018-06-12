import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import style from './StopPage.css';
import { getArrivalsToStop, getStopData } from '../../helpers/fetchUtils'

class StopPageComponent extends Component {
  state = {
    arrivals: [],
    stopData: {}
  }
  componentDidMount () {
    this.getArrivals(this.props.match.params.id);
    this.getStop(this.props.match.params.id);
  }

  async getArrivals (id) {
    this.setState({
      arrivals: await getArrivalsToStop(id)
    });
    console.log(await getArrivalsToStop(id));
  }

  async getStop (id) {
    this.setState({
      stopData: await getStopData(id)
    });
    console.log(await getStopData(id));
  }

  render () {
    const { history } = this.props;
    const { arrivals, stopData } = this.state;
    return (
      <React.Fragment>
        <p onClick={history.goBack} className={style.back}>← Back</p>
        <h1>Stop {stopData.commonName}</h1>
        {arrivals.length ? arrivals.map((item) => item.id) : 'No arrivals'}
      </React.Fragment>
    );
  }
}

export const StopPage = withRouter(StopPageComponent);
