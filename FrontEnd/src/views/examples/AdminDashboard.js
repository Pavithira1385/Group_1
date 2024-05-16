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
{/* Render hotels details in a table if showHotels is true */}
{showHotels && (
        <div>
          <h2>Hotels</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address1</th>
                <th>Address2</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Phone</th>
                <th>Email</th>
                <th>CheckInDate</th>
                <th>CheckInTime</th>
                <th>CheckOutDate</th>
                <th>CheckOutTime</th>
                <th>Roompreference</th>
                <th>NoofAdults</th>
                <th>NoofChildren</th>
               
                {/*  <th>payment</th> */}
              </tr>
            </thead>
            <tbody>
              {hotels.map(hotel => (
                <tr key={hotel._id}>
                  <td>{hotel.firstname}</td>
                  <td>{hotel.lastName}</td>
                  <td>{hotel.address1}</td>
                  <td>{hotel.address2}</td>
                  <td>{hotel.city}</td>
                  <td>{hotel.state}</td>
                  <td>{hotel.zipCode}</td>
                  <td>{hotel.phone}</td>
                  <td>{hotel.email}</td>
                  <td>{hotel.checkInDate}</td>
                  <td>{hotel.checkInTime}</td>
                  <td>{hotel.checkOutDate}</td>
                  <td>{hotel.checkOutTime}</td>
                  <td>{hotel.roomPreference}</td>
                  <td>{hotel.numberOfAdults}</td>
                  <td>{hotel.numberOfChildren}</td>
                  
                  {/* Add more table data cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}



{/* Render vehicles details in a table if showVehicles is true */}
{showVehicles && (
  <div>
    <h2>Vehicles</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Capacity</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {vehicles.map(vehicle => (
          <tr key={vehicle._id}>
            <td>{vehicle.name}</td>
            <td>{vehicle.type}</td>
            <td>{vehicle.capacity}</td>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}



{showPlaces && (
  <div>
    <h2>Places</h2>
    <table className="data-table">
      <thead>
        <tr>
        <th>Items</th>
          
        </tr>
      </thead>
      <tbody>
        {places.map(place => (
          <tr key={place._id}>
            <td>{place.items+" "}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
{/* Render registration details in a table if showRegistrations is true */}
{showRegistrations && (
  <div>
    <h2>Registrations</h2>
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Birth</th>
          <th>Country</th>
          <th>Contact</th>
       
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {registrations.map(registration => (
          <tr key={registration._id}>
            <td>{registration.name}</td>
            <td>{registration.email}</td>
            <td>{registration.birth}</td>
            <td>{registration.country}</td>
            <td>{registration.contact}</td>
         
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
</div>

);

   
};

export default AdminDashboard;

