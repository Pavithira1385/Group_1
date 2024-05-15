
import React from "react";
import axios from "axios";
import { useState } from "react";
import bcrypt from 'bcryptjs';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Mynavlog from "components/Navbars/Mynavlog.js";
import Home from "./Home";
import Admin from "./AdminDashboard";
function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

   const [encryptedPassword, setEncryptedPassword] = useState('');
  const [email,setemail]=useState();
  const [Password,setPass]=useState();
  const [check,setcheck]=useState(false);
  const show = async (e) => {
    e.preventDefault();
        if(email==null&&Password==null)
            {
                alert("Please enter email and password");
            }
        else if(email=='admin@gmail.com'&&Password=='1234')
            {
               setcheck(true);
            }
        else
            {
                alert('Your are not an Admin');
            }
    }
