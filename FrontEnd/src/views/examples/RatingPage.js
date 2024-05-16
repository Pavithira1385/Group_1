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
   return (
    <>
      <Homenav />
      <div
        className="page-header"
        style={{
           backgroundImage: "url(" + require("assets/img/ln2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                  <h2>Rate this page</h2>
                  <label>Your Comment</label>
                  <Input 
                    placeholder="Type here" 
                    type="text" 
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                  />
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <span
                        key={ratingValue}
                        style={{ cursor: 'pointer', color:'yellow' ,fontSize:50}}
                        onClick={() => handleRatingClick(ratingValue)}
                        onMouseEnter={() => handleMouseEnter(ratingValue)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoverRating ? (
                          ratingValue <= hoverRating ?  '★'  : '☆'
                        ) : (
                          ratingValue <= rating ? '★' : '☆'
                        )}
                      </span>
                    );
                  })}
                  <br />
                  {rating ? <p>You rated this page: {rating} stars</p> : <p>Please rate this page</p>}
                  {submissionSuccess && <p>Thank you for your feedback!</p>}
                </div>
                <Button 
                  block 
                  className="btn-round" 
                  color="info" 
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Group one
          </h6>
        </div>
      </div>
    </>
  );
}

export default Rating;

