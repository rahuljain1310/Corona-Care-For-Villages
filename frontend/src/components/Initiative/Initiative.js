import React from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import voluImg from "./Svgs/volunteer.svg";
import doctImg from "./Svgs/doctor-surgeon.svg";
import donaImg from "./Svgs/donate-donation.svg";

function Initiative() {
  return (
    <section id='sc-initiative'>
      <h1> Join The Initiative !</h1>
      <Row>
        <Container>
          <Row className="mx-auto">
            <Col lg={4} className="mx-auto d-block">
              <Card style={{padding: '10%'}}>
                <a href="https://www.google.co.in">
                  <div className="mb-2 text-center">
                    <Image style={{ width: "80%" }} src={voluImg} fluid />
                    <center style={{ margin: "16px", fontSize: "1.5em" }}>
                      <p>Volunteer</p>
                    </center>
                  </div>
                </a>
              </Card>
            </Col>
            <Col lg={4} className="mx-auto d-block">
              <Card style={{padding: '10%'}}>
                <a href="https://www.google.co.in">
                  <div className="mb-2 text-center">
                    <Image style={{ width: "80%" }} src={doctImg} fluid />
                    <center style={{ margin: "16px", fontSize: "1.5em" }}>
                      <p>Doctor</p>
                    </center>
                  </div>
                </a>
              </Card>
            </Col>
            <Col lg={4} className="mx-auto d-block">
              <Card style={{padding: '10%'}}>
                <a href="https://www.google.co.in">
                  <div className="mb-2 text-center">
                    <Image style={{ width: "80%" }} src={donaImg} fluid />
                    <center style={{ margin: "16px", fontSize: "1.5em" }}>
                      <p>Donate</p>
                    </center>
                  </div>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default Initiative;
