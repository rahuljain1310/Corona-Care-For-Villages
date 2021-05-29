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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHaFCwUwhtxjBxC5OOoHzNIaaGTsRD-v0M_77iBGRAeuPoPw/viewform?usp=sf_link">
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScnEUvOZOzRj7KJn8xQVAOW427Bmj1P7r6LowepUGAcn0QGrw/viewform?usp=sf_link">
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
                <a href="https://www.payumoney.com/paybypayumoney/#/5C4FFE80BB68EF59CA375A1CCFE306E1">
                  <div className="mb-2 text-center">
                    <Image style={{ width: "80%" }} src={donaImg} fluid />
                    <center style={{ margin: "16px", fontSize: "1.5em" }}>
                      <p>Donate</p>
                    </center>
                    
                  </div>
                </a>
                * Write Covid Care in Project Name
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default Initiative;
