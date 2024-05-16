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
