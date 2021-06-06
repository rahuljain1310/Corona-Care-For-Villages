import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <header>
      <Row>
        {/* <Col lg={6} md={8} sm={10}>
          <div className="logo-section">
            <div id="head"><span>CoviCare:</span> Covid-19 Care For Villages</div>
            <div id="subhead">Helping others is the way we help ourselves!</div>
          </div>
        </Col> */}
        {/* <Col lg={6} md={4} sm={2}> */}
        <Col>
          <nav className="color">
            <a className="Links" href="/donate">Donate</a>
            <a className="Links" href="/#sc-problems">About Us</a>
            <a className="Links" href="/#sc-approach">Approach</a>
            <a className="Links" href="/#sc-testimonials">Testimonials</a>
            <a className="Links" href="/#sc-partners">Organization</a>
          </nav>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
