import React from "react";
import { Row, Col, Container, Jumbotron, Image, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import header from "./Images/header.jpg";
import vaccine from "./Images/vaccine.png";
import medicine from "./Images/medicines.png";
import voluImg from "./Svgs/volunteer.svg";
import doctImg from "./Svgs/doctor-surgeon.svg";
import donaImg from "./Svgs/donate-donation.svg";
import doctor from "./Images/doctor.png";
import Header from "../Header/Header";
import after_back from "./Images/banner-after.png";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
    <Header />
      <Container>
        <Row>
          <Col lg = {5}>
            <div className='left-pane'>
              <br/>
              <br/>
              <div className='image'>
                <div className='aspect-ratio'>
                  <img style={{ width: '100%' }} src={doctor} />
                  <br/>
                  <div className='white-circle' style={{top: '-4%', left: '0%'}}/>
                  <div className='white-circle' style={{ bottom: '0%', right: '-4%' }} />
                  <div className='white-circle' style={{bottom: '0%', left: '-4%'}}/>
                </div>
              </div>
              <br/>
              <h2>Let's Fight This Together</h2>
            </div>
          </Col>
          <Col >
            <div className='right-pane'>
              <span style={{ fontSize: '3em' }}>COVI-CARE</span> <br />
              <h2>Protecting Rural India from Covid-19</h2>
              <p>
                We, in collaboration with NGOs and volunteers at ground are aiming to provide <span>Medicine Kits</span> and
                connecting <span>Doctors</span> to <span>Patients</span> in rural areas. 
              </p>
              <h3><a href="/#sc-initiative">We need your help! Join the Initiative.</a></h3>
              <br/>
              <div className='flex-gap'>
                <Button size='lg' variant='success'>Volunteer</Button>
                &nbsp;
                <Button size='lg' variant='success'>Doctors</Button>
                &nbsp;
                <Button size='lg' variant='success'>Donate</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img style={{width: '100%'}} src={after_back}/>
    </div>
  )
}

export default Home;
