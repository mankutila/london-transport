import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getStopsOnLine } from '../../helpers/fetchUtils';
import { Stop } from '../Stop/Stop';
import { Loading } from '../Loading/Loading';
import style from './LinePage.css';

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
    return (
      <React.Fragment>
        <p onClick={history.goBack}>← Back</p>
        <h1>Line {match.params.id}</h1>
        {loading ? <Loading/> :
          <div className={style.stops}>
            <div className={`${style.inbound} ${style.stoplist} `}>
              <h2>Inbound</h2>
              {stops && stops[0] && stops[0].stations.map((stop) => {
                return <Stop key={stop.id} {...stop} />;
              })}
            </div>
            <div className={`${style.outbound} ${style.stoplist} `}>
              <h2>Outbound</h2>
              {stops && stops[1] && stops[1].stations.map((stop) => {
                return <Stop key={stop.id} {...stop} />;
              })}
            </div>
          </div>
        }

      </React.Fragment>
    );
  }
}

export const LinePage = withRouter(LinePageComponent);
