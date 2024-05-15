
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
const [encryptedPassword, setEncryptedPassword] = useState('');

  const show = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/registrations");
      if (res.data === "fail") {
        alert("Failed");
      } else {
        setData(res.data);
        const user = res.data.find((e) => e.email === ttmail);
        if (user) {
          setEncryptedPassword(user.encryptedPassword);
          const passwordMatch = bcrypt.compareSync(tpwd, user.encryptedPassword);
          setCheck(passwordMatch);
          if (!passwordMatch) {
            alert('Invalid Password!!!');
          }
        } else {
          alert('Invalid Email!!!');
        }
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while fetching data.');
    }
  };
   return (
    <>
    {check ? (
      < Home/>
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
                <h3 className="title mx-auto">Welcome</h3>
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
                  <Input placeholder="Email" type="text" required onChange={(e) => { setTmail(e.target.value) }} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" required onChange={(e) => { setTpwd(e.target.value) }}/>
                  <Button block className="btn-round" color="info" onClick={show}>
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="https://www.website.com/forgot-password/?source=SC"
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="/Loginadmin"
                  >
                    Login As Administrator
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
