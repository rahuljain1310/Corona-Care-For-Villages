import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Col, Row, Image} from "react-bootstrap";

import './App.css';
import header from './header.jpg';
import voluImg from './volunteer.svg';
import doctImg from './doctor-surgeon.svg';
import donaImg from './donate-donation.svg';

import Footer from './components/Footer';

const App = () => (
  <>
  <Container className="p-3">
    <Jumbotron>
    <Image src={header} fluid />
      <h1 className="header">Corona Care for Villages</h1>
    </Jumbotron>
    <p>Join us as:</p>
    <Container>
      <Row className="mx-auto">
        <Col className="mx-auto d-block">
          <a href="https://www.google.co.in">
            <div className="mb-2 text-center">
              <Image style={{width:'100px'}} src={voluImg} fluid />
              <center><p>Volunteer</p></center>
            </div>
          </a>
        </Col>
        <Col className="mx-auto d-block">
          <a href="https://www.google.co.in">
            <div className="mb-2 text-center">
              <Image style={{width:'100px'}} src={doctImg} fluid />
              <center><p>Doctor</p></center>
            </div>
          </a>
        </Col>
        <Col className="mx-auto d-block">
          <a href="https://www.google.co.in">
            <div className="mb-2 text-center">
              <Image style={{width:'100px'}} src={donaImg} fluid />
              <center><p>Donate</p></center>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
    {/* <p>Support our cause:</p>
    <Container>
      <Row>
        <Col>
          <a href="https://www.google.co.in">
            <div className="mb-2 text-center">
              <Image style={{width:'200px'}} src={donaImg} fluid />
              <center><p>Donate</p></center>
            </div>
          </a>
        </Col>
      </Row>
    </Container> */}
  </Container>
  <Footer />
  </>
  
);

export default App;
