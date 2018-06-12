import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getStopsOnLine } from '../../helpers/fetchUtils';
import { Stop } from '../Stop/Stop';
import { Loading } from '../Loading/Loading';
import style from './LinePage.css';
import { Map } from '../Map/Map';
import { getCoordArrayFromStr } from '../../helpers/utils';

const mapOptions = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBzJHmR-D-VJ9fVj8PhKz1z5hhKwhPJ-Ys",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

class LinePageComponent extends Component {
  state = {
    stops: [],
    loading: true
  }

  componentDidMount () {
    this.getStops(this.props.match.params.id);
  }

  async getStops (lineId) {
    this.setState({ stops: await getStopsOnLine(lineId), loading: false });
  }

  render () {
    const { history, match } = this.props;
    const { stops, loading } = this.state;
    const pathInbound = stops && stops[0] && getCoordArrayFromStr(stops[0].lineStrings[0]);
    const pathOutbound = stops && stops[1] && getCoordArrayFromStr(stops[1].lineStrings[0]);
    return (
      <React.Fragment>
        <p onClick={history.goBack} className={style.back}>← Back</p>
        <h1>Line {match.params.id}</h1>
        {loading ? <Loading/> :
          <div className={style.stops}>
            <div className={style.map}>
              <Map {...mapOptions} polylineShown pathInbound={pathInbound} pathOutbound={pathOutbound} />
            </div>
            <div className={`${style.inbound} ${style.stoplist} `}>
              <h2>Inbound</h2>
              {stops && stops[0] && stops[0].stations.map((stop) => {
                return <Stop key={stop.id} {...stop} inbound />;
              })}
            </div>
            <div className={`${style.outbound} ${style.stoplist} `}>
              <h2>Outbound</h2>
              {stops && stops[1] && stops[1].stations.map((stop) => {
                return <Stop key={stop.id} {...stop} inbound={false} />;
              })}
            </div>
          </div>
        }

      </React.Fragment>
    );
  }
}

export const LinePage = withRouter(LinePageComponent);
