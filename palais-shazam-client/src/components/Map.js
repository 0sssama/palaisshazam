import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 34.064324, lng: -4.980854 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 34.064324, lng: -4.980854 }} />}
  </GoogleMap>
))


export default Map
