import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Input, Container, Row, Col } from "reactstrap";
//import Homenav from "./components/Navbars/Homenav.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Homenav from "components/Navbars/Homenav.js";
function Rating() {
  document.documentElement.classList.remove("nav-open");
  
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const [suggestions, setSuggestions] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/ratings', {
        suggestions: suggestions,
        UserRating: rating,
      });
      setSubmissionSuccess(true);
      setRating(null); // Reset rating after submission
      setSuggestions(''); // Clear suggestions input after submission
      alert('Suggestion submitted successfully');
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      alert('Failed to submit suggestion. Please try again.');
    }
  };
