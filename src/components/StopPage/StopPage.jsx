import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getArrivalsToStop, getStopData } from '../../helpers/fetchUtils';
import { Map } from '../Map/Map';
import { Loading } from '../Loading/Loading';
import { LineItem } from '../LineItem/LineItem';
import style from './StopPage.css';

const mapOptions = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBzJHmR-D-VJ9fVj8PhKz1z5hhKwhPJ-Ys",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px`, marginBottom: `30px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

class StopPageComponent extends Component {
  state = {
    arrivals: [],
    stopData: {},
    loading: true
  }
  componentDidMount () {
    this.getStop(this.props.match.params.id);
  }

  async getStop (id) {
    this.setState({
      stopData: await getStopData(id),
      arrivals: await getArrivalsToStop(id),
      loading: false
    });
  }

  render () {
    const { history } = this.props;
    const { arrivals, stopData, loading } = this.state;
    return (
      <React.Fragment>
        <p onClick={history.goBack} className={style.back}>← Back</p>
        {loading ? <Loading/> :
          <div>
            <h1>Stop {stopData.commonName}</h1>
            <Map {...mapOptions} markerShown coord={{ lat: parseFloat(stopData.lat), lng: parseFloat(stopData.lon) }} />
            {arrivals.length > 0 && <h2>Arrivals</h2>}
            {arrivals.length > 0 ? arrivals.map((item, index) => {
              return <LineItem key={index} id={item.lineId} name={item.lineName} arrival={item} />;
            }) : 'No arrivals info'}
          </div>
        }
      </React.Fragment>
    );
  }
}

export const StopPage = withRouter(StopPageComponent);
