import React from 'react';
import 'assets/css/ContactUs.css';
import Nav from 'components/Navbars/RentNav';
const ContactUs = () => {
   return (
    <>
    <Nav/>
    <div className="page-header"
    style={{
       backgroundImage: "url(" + require("assets/img/ln2.jpg") + ")",
    }}>
   <div className="contact-details">
        <h2>Contact Us</h2>
        <p className="contact-text">
          Feel free to get in touch with us using the information below. We look forward to hearing from you!
        </p>
        <div className="company-info">
          <h3>TRAVELERS' WORLD</h3>
          <p>123 Main Street</p>
          <p>Pampaimadu, Vavuniya</p>
          <p>Sri Lanka</p>
          <p>Phone: 065 2222222</p>
          <p>Email: travelers'world@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  );
};


