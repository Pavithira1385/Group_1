
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

  return (
    <>
    {check ? (
      < Admin/>
    ) : (
    <>
      <Mynavlog />
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
                <h3 className="title mx-auto">Welcome Admins</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form" action="POST">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" required onChange={(e) => { setemail(e.target.value) }} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" required onChange={(e) => { setPass(e.target.value) }}/>
                  <Button block className="btn-round" color="info" onClick={show}>
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="forgot">
                  <label>Are you New ?</label>
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/sign"
                  >
                   Sign In
                  </Button>
                </div>
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
     )}
     </>
  );
}

export default RegisterPage;
