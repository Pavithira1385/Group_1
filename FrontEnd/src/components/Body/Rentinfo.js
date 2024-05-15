
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import Homenav from 'components/Navbars/Homenav';
function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-nude section-nucleo-icons">
        <Container>
          <Row>
          <h5>
          <br></br>
            <br></br>
            <br></br>
        We are giving you thr brst travelling experience all around the country Choose your 
        priference according to your wish and buddget
        </h5>
            <Col lg="4" md="12">
              <h2 className="title">Bicycle</h2>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/bi1.jpg")}
                />
                <h6>Rs.1000 per day</h6>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="/Terms"
                outline
                target=""
              >
                Rent 
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h2 className="title">Motor Bike</h2>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/bi2.jpg")}
                />
                  <h6>Rs.2500 per day for 100kms+Rs20 for additional km</h6>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                align="center"
                href="/Terms"
                outline
                target=""
              >
                Rent 
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h2 className="title">Car</h2>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/bi3.jpg")}
                />
                <h6>Rs.4000 per day for 100kms+Rs30 for additional km</h6>
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                href="/Terms"
                outline
                target=""
              >
                Rent 
              </Button>
            </Col>
            <br></br>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
