import React, { useState } from 'react';
import travel_bg from './travel_bg.jpeg';


export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect or perform any action upon successful sign-in
        console.log('Sign-in successful');
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <>
      <div className="main">
        <div class="nav">
          <nav></nav>
        </div>

        <div className="imgform">
          <div class="image1">
            <img src={travel_bg} alt="trvl" id="p01"></img>
          </div>

          <div class="form">
            <br></br>
            <br></br>
            <h3 className="signin">Sign In</h3>
            <p className="noaccount">
              Don't you have an account?<a href="signin.js" class="joinin">Join In</a>
            </p>

            <form onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              handleSignIn();
            }}>
              <br></br>
              <label className="email">Email</label>
              <input type="email" placeholder="Email" class="emailtype"
                value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
              <br></br><br></br>

              <label class="password">Password</label>
              <input type="password" placeholder="Password" class="passwordtype"
                value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
              <br></br><br></br>
              <input type="submit" value="Sign In" class="signinnow"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
