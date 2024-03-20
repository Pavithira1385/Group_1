import React, { useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker,Autocomplete ,DirectionsRenderer} from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '600px'
};
const center = {
  lat: 7.8731,
  lng: 80.7718
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBOVfPLNwu5HAIJpcDvmMnR0T4XsvPQm_M",
   libraries:['places']
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const [directionressponse,setdireectsresponse]=useState(null)
const originref=useRef()
const destiref=useRef()
async function calculateAndDisplayRoute() {
    //eslint-disable-next-line no-undef
    const directionsService=new google.maps.DirectionsService()
    const results= await directionsService.route({
        origin:originref.current.value,
        destination:destiref.current.value,
        //eslint-disable-next-line no-undef
        travelMode:google.maps.TravelMode.DRIVING
    })
   setdireectsresponse(results)
  }
  return isLoaded ? (
      <>
      <h2>Get your Directions</h2>
      <div className='form1'>
        <table>
          <tr>
            <td> <h4>Enter your Origin </h4></td>
          </tr>
          <tr>
            <td>  <Autocomplete>
        <input type='text' ref={originref}></input>
        </Autocomplete></td>
          </tr>
          <tr>
            <td>  <h4>Enter your Destination </h4></td>
          </tr>
          <tr>
            <td><Autocomplete>
      <input type='text' ref={destiref}></input>
      </Autocomplete> </td>
          </tr>
          <tr>
            <td><input type='submit' value='Submit' onClick={calculateAndDisplayRoute}></input> </td>
          </tr>

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
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/>
        {directionressponse && <DirectionsRenderer directions={directionressponse}/>}
      </GoogleMap>
     
      </div>
      
      
      
      </>
     
  ) : <>
  
  </>
}

export default React.memo(MyComponent)