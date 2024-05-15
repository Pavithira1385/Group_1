
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
function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [data, setData] = useState([]);
  const [ttmail, setTmail] = useState('');
  const [tpwd, setTpwd] = useState('');
  const [check, setCheck] = useState(false);
