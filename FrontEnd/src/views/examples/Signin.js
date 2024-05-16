
import React from "react";
import axios from "axios";
import { useState } from 'react';
 import bcrypt from 'bcryptjs';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MynavSign from "components/Navbars/MynavSign.js";
import RegisterPages from "./RegisterPage";
function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const [msg, setMsg] = useState(' ')
  const [name, setName] = useState(' ')
  const [pwd, setPwd] = useState(' ')
  const [email, setMail] = useState(' ')
  const [birth, setBirth] = useState(' ')
  const [country, setCountry] = useState(' ')
  const [contact, setContact] = useState()
  const [data, setData] = useState([])
  const [encryptedPassword, setEncryptedPassword] = useState('');
  


  const handleEncrypt = () => {
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
            if (err) {
                console.error(err);
                return;
            }
            setEncryptedPassword(hash);
        });
    });
}
let submit = async (e) => {
    e.preventDefault()
    if (name == ' ' || pwd == ' ' || email == ' ') {
        alert('Please fill the details !!')
    }
    else {
        try {
            handleEncrypt()
            alert("Sign in completed!!!")
            await axios.post("http://localhost:5000/registrations", {
                msg,
                name,
                email,
                birth,
                country,
                contact,
                encryptedPassword,
            })
        }
        catch {
            console.log(e);
        }
    }

}
let show = async (e) => {
    e.preventDefault()
    try {
        await axios.get("http://localhost:5000/registrations").then(res => {
            if (res.data === "fail") {
                alert("Failed")
            }
            else {
                setData(res.data)
            }
        })
            .catch(e => {

            })
    }
    catch {
        console.log(e);
    }
}
function reset() {
    setName(' ');
    setPwd(' ');
    setMsg(' ');
    setMail(' ');
}

  return (
    <>
      <MynavSign />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/ln4.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form" action="POST">
                <label>Full Name</label>
                  <Input placeholder="Full name" type="text" required onChange={(e) => { setName(e.target.value) }}/>
                  <label>Birthday</label>
                  <Input placeholder="Birthday" type="date" required onChange={(e) => { setBirth(e.target.value) }}/>
                  <label>Country</label>
                  <Input placeholder="Country" type="text" onChange={(e) => { setCountry(e.target.value) }} />
                  <label>Contact Number</label>
                  <Input placeholder="Contact Number" type="number" onChange={(e) => { setContact(e.target.value) }}/>
                  <label>Email</label>
                  <Input placeholder="Email" type="text" onChange={(e) => { setMail(e.target.value) }}/>
                  <label>Password</label>
                  <Input placeholder="Password" type="password" onChange={(e) => { setPwd(e.target.value) }}/>
                  <label>Confirm Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="info" href="/home"  onClick={submit}>
                    Sign In
                  </Button>
                </Form>
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

export default RegisterPage;
