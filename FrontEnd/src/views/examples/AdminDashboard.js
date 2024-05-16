import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'assets/css/admincss.css'; // Import CSS file for styling




const AdminDashboard = () => {
    

  const [ratings, setRatings] = useState([]);
  const [showRatings, setShowRatings] = useState(false); // State to toggle showing ratings
  const [hotels, setHotels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [showHotels, setShowHotels] = useState(false); // State to toggle showing hotels
  const [showVehicles, setShowVehicles] = useState(false); // State to toggle showing vehicles
  const [places, setPlaces] = useState([]);
  const [showPlaces, setShowPlaces] = useState(false); // State to toggle showing travelers
  const [registrations, setRegistrations] = useState([]);
  const [showRegistrations, setShowRegistrations] = useState(false); // State to toggle showing registrations
useEffect(() => {
    // Fetch ratings from user routes when component mounts
    axios.get('http://localhost:5000/ratings')
      .then(response => {
        setRatings(response.data);
      })
      .catch(error => {
        console.error('Error fetching ratings:', error);
      });

      axios.get('http://localhost:5000/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });

    // Fetch vehicles from user routes when component mounts
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
      axios.get('http://localhost:5000/places')
      .then(response => {
        setPlaces(response.data);
      })
      .catch(error => {
        console.error('Error fetching places:', error);
      });
      axios.get('http://localhost:5000/registrations')
      .then(response => {
        setRegistrations(response.data);
      })
      .catch(error => {
        console.error('Error fetching registrations:', error);
      });
  }, []);

  const handleReviewClick = () => {
    // Toggle showing ratings
    setShowRatings(!showRatings);
  };
  const handleHotelClick = () => {
    // Toggle showing hotels
    setShowHotels(!showHotels);
  };

  const handleVehicleClick = () => {
    // Toggle showing vehicles
    setShowVehicles(!showVehicles);
  };
  const handlePlaceClick = () => {
    // Toggle showing travelers
    setShowPlaces(!showPlaces);
  };

  const handleRegistrationClick = () => {
    // Toggle showing registrations
    setShowRegistrations(!showRegistrations);
  };
 return (
    <div className='body'>
      <h1>Admin Dashboard</h1>
      <div className="button-container">
      <button onClick={handleReviewClick}>{showRatings ? "Hide Ratings" : "Review Ratings"}</button>
      <button onClick={handleHotelClick}>{showHotels ? "Hide Hotels" : "Review Hotels"}</button>
      <button onClick={handleVehicleClick}>{showVehicles ? "Hide Vehicles" : "Review Vehicles"}</button>
      <button onClick={handlePlaceClick}>{showPlaces ? "Hide Places" : "Review Places"}</button>
      <button onClick={handleRegistrationClick}>{showRegistrations ? "Hide Registrations" : "Review Registrations"}</button>
      </div>
 {showRatings && (
  <div className="table-container">
    <h2>Ratings</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>Suggestions</th>
          <th>User Rating</th>
        </tr>
      </thead>
      <tbody>
        {ratings.map(rating => (
          <tr key={rating._id}>
            <td>{rating.suggestions}</td>
            <td>{rating.UserRating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
