import React from "react";
import { Row, Col, Container, Jumbotron, Image } from "react-bootstrap";
import header from "./Images/header.jpg";
import voluImg from "./Svgs/volunteer.svg";
import doctImg from "./Svgs/doctor-surgeon.svg";
import donaImg from "./Svgs/donate-donation.svg";
import "./Home.css";

function Home() {
  return (
    <div>
      <Row>
        <Col lg={7}>
          <img src={header} width="100%" />
          <h1 className="header">Corona Care for Villages</h1>
        </Col>
      </Row>
      <div className="join-initiative"> Join The Initiative !</div>
      <Row>
        <Container>
          <Row className="mx-auto">
            <Col lg={4} className="mx-auto d-block">
              <a href="https://www.google.co.in">
                <div className="mb-2 text-center">
                  <Image style={{ width: "100px" }} src={voluImg} fluid />
                  <center style={{ margin: "16px", fontSize: "2em" }}>
                    <p>Volunteer</p>
                  </center>
                </div>
              </a>
            </Col>
            <Col lg={4} className="mx-auto d-block">
              <a href="https://www.google.co.in">
                <div className="mb-2 text-center">
                  <Image style={{ width: "100px" }} src={doctImg} fluid />
                  <center style={{ margin: "16px", fontSize: "2em" }}>
                    <p>Doctor</p>
                  </center>
                </div>
              </a>
            </Col>
            <Col lg={4} className="mx-auto d-block">
              <a href="https://www.google.co.in">
                <div className="mb-2 text-center">
                  <Image style={{ width: "100px" }} src={donaImg} fluid />
                  <center style={{ margin: "16px", fontSize: "2em" }}>
                    <p>Donate</p>
                  </center>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default Home;
