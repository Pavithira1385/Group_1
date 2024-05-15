import React, { useState, useEffect } from "react";
import 'assets/css/book.css'; // Create this CSS file for custom styles
import axios from "axios";
const HotelBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    roomPreference: "",
    numberOfAdults: "",
    numberOfChildren: 0,
    payment:0

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
        // Make a POST request to your backend endpoint with the form data
        await axios.post('http://localhost:5000/hotels', formData);
        
        // Log a success message
        console.log('Form data submitted successfully:', formData);
        
        // Reset the form data after successful submission
        setFormData({
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            email: "",
            checkInDate: "",
            checkInTime: "",
            checkOutDate: "",
            checkOutTime: "",
            roomPreference: "",
            numberOfAdults: "",
            numberOfChildren: 0,
            payment: 0,
        });

        // Optionally, you can set a state to indicate successful submission or show a success message to the user
    } catch (error) {
        // Log an error message if the submission fails
        console.error('Error submitting form data:', error);
        
        // Optionally, you can set a state to indicate the failure or show an error message to the user
    }
};
  
  return (
    <div className="booking-form">
      <div className="hotel-pool">
        <h1 className="cover-text">Hotel Paradise</h1>
      </div>
      <div className="booking-filed">
        <form className="my-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="firstName">
            First Name*
          </label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            required
            onChange={handleChange}
          />

          <label className="form-label" htmlFor="lastName">
            Last Name*
          </label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            required
            onChange={handleChange}
          />

          <label className="form-label" htmlFor="address1">
            Address 1*
          </label>
          <input
            className="form-input"
            type="text"
            id="address1"
            required
            onChange={handleChange}
          />

          <label className="form-label" htmlFor="address2">
            Address 2
          </label>
          <input
            className="form-input"
            type="text"
            id="address2"
            onChange={handleChange}
          />

          <div class="row">
            <div class="col-50">
              <label className="form-label" for="city">
                Living City *
              </label>
              <input
                className="form-input1"
                type="text"
                id="city"
                name="city"
                required
                placeholder="NY"
                onChange={handleChange}
              />
            </div>
            <div class="col-50">
              <div class="row">
                <div class="col-50">
                  <label className="form-label" for="state">
                    State
                  </label>
                  <input
                    className="form-input1"
                    type="text"
                    id="state"
                    name="state"
                    placeholder="EE"
                    onChange={handleChange}
                  />
                </div>
                <div class="col-50">
                  <label className="form-label" for="zipCode">
                    Zip Code
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="40000"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-50">
              <label className="form-label" htmlFor="phone">
                Phone*
              </label>
              <input
                className="form-input1"
                type="tel"
                id="phone"
                required
                placeholder="(__) ___-___"
                onChange={handleChange}
              />
            </div>
            <div class="col-50">
              <label className="form-label" htmlFor="email">
                {" "}
                Email*
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-50">
              <div class="row">
                <div class="col-50">
                  <label className="form-label" htmlFor="checkInDate">
                    Check-in Date*
                  </label>
                  <input
                    className="form-input1"
                    type="date"
                    id="checkInDate"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="col-50">
                  <label className="form-label" htmlFor="checkInTime">
                    Check-in Time
                  </label>
                  <input
                    className="form-input1"
                    type="time"
                    id="checkInTime"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="col-50">
              <div class="row">
                <div class="col-50">
                  <label className="form-label" htmlFor="checkOutDate">
                    Check-out Date*
                  </label>
                  <input
                    className="form-input1"
                    type="date"
                    id="checkOutDate"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="col-50">
                  <label className="form-label" htmlFor="checkOutTime">
                    Check-out Time
                  </label>
                  <input
                    className="form-input"
                    type="time"
                    id="checkOutTime"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <label className="form-label" htmlFor="Roompreference">
            Room Preference*
          </label>
          <div className="room-preference">
            <input
              type="radio"
              id="standard"
              name="roomPreference"
              value="standard"
              checked={formData.roomPreference === "standard"}
              onChange={handleChange}
            />
            <label htmlFor="standard">Standard</label>

            <input
              type="radio"
              id="deluxe"
              name="roomPreference"
              value="deluxe"
              checked={formData.roomPreference === "deluxe"}
              onChange={handleChange}
            />
            <label htmlFor="deluxe">Deluxe</label>

            <input
              type="radio"
              id="suite"
              name="roomPreference"
              value="suite"
              checked={formData.roomPreference === "suite"}
              onChange={handleChange}
            />
            <label htmlFor="suite">Suite</label>
          </div>
          <div class="row">
            <div class="col-50">
              <label className="form-label" htmlFor="numberOfAdults">
                Number of Adults*
              </label>
    
              <div className="checkbox-group">
                <label className="box">
                  <input type="radio" name="numberOfAdults" value="1" required checked={formData.numberOfAdults === "1"}
                    onChange={handleChange}/>
                  <span className="checkmark">1</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfAdults" value="2" checked={formData.numberOfAdults === "2"}
                    onChange={handleChange}/>
                  <span className="checkmark">2</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfAdults" value="3" checked={formData.numberOfAdults === "3"}
                    onChange={handleChange}/>
                  <span className="checkmark">3</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfAdults" value="4" checked={formData.numberOfAdults === "4"}
                    onChange={handleChange}/>
                  <span className="checkmark">4</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfAdults" value="5" checked={formData.numberOfAdults === "5"}
                    onChange={handleChange}/>
                  <span className="checkmark">5</span>
                </label>
              </div>
            </div>
            <div class="col-50">
            <label className="form-label" htmlFor="numberOfChildren">
                Number of Children
              </label>
    
              <div className="checkbox-group">
                <label className="box">
                  <input type="radio" name="numberOfChildren" value="1" checked={formData.numberOfChildren === "1"}
                    onChange={handleChange}/>
                  <span className="checkmark">1</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfChildren" value="2" checked={formData.numberOfChildren === "2"}
                    onChange={handleChange}/>
                  <span className="checkmark">2</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfChildren" value="3" checked={formData.numberOfChildren === "3"}
                    onChange={handleChange}/>
                  <span className="checkmark">3</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfChildren" value="4" checked={formData.numberOfChildren === "4"}
                    onChange={handleChange}/>
                  <span className="checkmark">4</span>
                </label>
                <label className="box">
                  <input type="radio" name="numberOfChildren" value="4" checked={formData.numberOfChildren === "5"}
                    onChange={handleChange}/>
                  <span className="checkmark">5</span>
                </label>
              </div>
            </div>
          </div>


          <div class="col-50">
              <label className="form-label" htmlFor="payment">
                {" "}
               Payment
              </label>
              <input
                className="form-input"
                type="payment"
                id="payment"
                onChange={handleChange}

              />
            </div>
          

          <button className="submit-button" type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default HotelBookingForm;
