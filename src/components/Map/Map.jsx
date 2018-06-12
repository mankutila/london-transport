import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import React from 'react';

export const Map = withScriptjs(withGoogleMap((props) => {
  const { polylineShown, markerShown, pathInbound, pathOutbound, coord } = props;
  const defaultLat = pathInbound[Math.round(pathInbound.length / 2)].lat;
  const defaultLng = pathInbound[Math.round(pathInbound.length / 2)].lng;
  return (
    <GoogleMap
      defaultZoom={12} defaultCenter={{ lat: defaultLat, lng: defaultLng }}
    >
      {polylineShown ? <Polyline path={pathInbound} options={{ strokeColor: '#FFC48E', strokeWeight: 5 }} /> : ''}
      {polylineShown ? <Polyline path={pathOutbound} options={{ strokeColor: '#8DC2C9', strokeWeight: 5 }} /> : ''}
      {markerShown ? <Marker position={coord} /> : ''}
    </GoogleMap>
  );
}));
