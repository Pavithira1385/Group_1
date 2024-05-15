import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '600px'
};
const center = {
  lat: 7.8731,
  lng: 80.7718
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "9JjKgE6570nucnpvh7uR4DOiTqJ5wDJ2dJj0xOnkHls",
    libraries:['places']
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const originRef = useRef(null);
  const destiRef = useRef(null);

  async function calculateAndDisplayRoute() {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING
    });
    setDirectionsResponse(results);
  }

  return isLoaded ? (
    <>
      <h2>Get your Directions</h2>
      <div className='form1'>
        <table>
          <tbody>
            <tr>
              <td><h4>Enter your Origin</h4></td>
            </tr>
            <tr>
              <td><input type='text' ref={originRef} /></td>
            </tr>
            <tr>
              <td><h4>Enter your Destination</h4></td>
            </tr>
            <tr>
              <td><input type='text' ref={destiRef} /></td>
            </tr>
            <tr>
              <td><input type='submit' value='Submit' onClick={calculateAndDisplayRoute} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='map'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </div>
    </>
  ) : null;
}

export default React.memo(Map);
