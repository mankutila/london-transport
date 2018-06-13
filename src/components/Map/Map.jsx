import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import PropTypes from 'prop-types';

export const Map = withScriptjs(withGoogleMap((props) => {
  const { polylineShown, markerShown, pathInbound, pathOutbound, coord } = props;
  const defaultLat = pathInbound ? pathInbound[Math.round(pathInbound.length / 2)].lat : coord.lat;
  const defaultLng = pathInbound ? pathInbound[Math.round(pathInbound.length / 2)].lng : coord.lng;
  return (
    <GoogleMap
      defaultZoom={polylineShown ? 12 : 19} defaultCenter={{ lat: defaultLat, lng: defaultLng }}
    >
      {polylineShown && <Polyline path={pathInbound} options={{ strokeColor: '#FFC48E', strokeWeight: 5 }} />}
      {polylineShown && <Polyline path={pathOutbound} options={{ strokeColor: '#8DC2C9', strokeWeight: 5 }} />}
      {markerShown && <Marker position={coord} />}
    </GoogleMap>
  );
}));

withGoogleMap.propTypes = {
  polylineShown: PropTypes.function,
  markerShown: PropTypes.function,
  pathInbound: PropTypes.array,
  pathOutbound: PropTypes.array,
  coord: PropTypes.object
};
