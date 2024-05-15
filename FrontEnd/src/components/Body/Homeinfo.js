
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-nude section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="5" md="6">
              <h2 className="title">Places</h2>
              <br />
              <p className="description">
                This is for get aware about the accractive places of sri lanka.If you are not 
                a familyier person to Sri lanka this section will guide you.After that you can konw about the 
                validity of traveling around thi beautiful country.
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="/Places"
                outline
                target=""
              >
                View Places
              </Button>
            </Col>
            <Col lg="5" md="6">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/im2.jpg")}
                />
                <p className="text-center">Mirissa</p>
            </Col>
            <br></br>
          </Row>
          <Row>
            <Col lg="5" md="6">
            <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/im3.jpg")}
                />
                <p className="text-center">Badulla</p>
            </Col>
         
            <Col lg="5" md="6">
              <h2 className="title">Plans</h2>
              <br />
              <p className="description">
                This is for get aware about the accractive places of sri lanka.If you are not 
                a familyier person to Sri lanka this section will guide you.After that you can konw about the 
                validity of traveling around thi beautiful country.
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="/Rent"
                outline
                target=""
              >
                View Plans
              </Button>
            </Col>
          
          </Row>
          <Row>
            <Col lg="5" md="6">
              <h2 className="title">Profile</h2>
              <br />
              <p className="description">
                This is for get aware about the accractive places of sri lanka.If you are not 
                a familyier person to Sri lanka this section will guide you.After that you can konw about the 
                validity of traveling around thi beautiful country.
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target=""
              >
                View Profile
              </Button>
            </Col>
            <Col lg="5" md="6">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/back2.jpg")}
                />
                <p className="text-center">Lanka</p>
            </Col>
            <br></br>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
