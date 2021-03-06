import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <header>
      <Row>
        <Col lg={6} md={8} sm={10}>
          <div className="logo-section">
            <div id="head"><span>CoviCare:</span> Covid-19 Care For Villages</div>
            <div id="subhead">Helping others is the way we help ourselves!</div>
          </div>
        </Col>
        <Col lg={6} md={4} sm={2}>
          <nav className="color" style={{ textAlign: "right" }}>
            {/* <a className="Links" href="/#sc-about">  About </a> */}
            <a className="Links" href="/donate">  Donate </a>
            <a className="Links" href="/#sc-mission">  Mission </a>
            <a className="Links" href="/#sc-partners">  Partners </a>
            <a className="Links" href="/#sc-approach">  Approach </a>
            <a className="Links" href="/#sc-problems">  Problems </a>
            {/* <a className="Links" href="/#sc-media">   News </a> */}
            {/* <a className="Links" href="/#sc-testimonials">  Testimonies </a> */}
            {/* <a className="Links" href="/#sc-comments">  Comments </a> */}
          </nav>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
