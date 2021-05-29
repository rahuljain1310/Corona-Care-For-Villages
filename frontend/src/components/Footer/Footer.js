import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

function FormFeedback() {
  return (
    <div className="FormFeedback">
      <a
        href="https://forms.gle/HNRTsw2pzNgFx2a27"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send Feedback
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p className="Quoterow">
        <em>
          "Our physical duty is to advance toward freedom : physical mental and
          spiritual and help others to do so."
          <br /> - Swami Vivekanand
        </em>
      </p>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h4>Got a Feedback ?</h4>
            <FormFeedback />
          </Col>
          <Col md={4} sm={6}>
            <h4>Links</h4>
            <ul class="list-unstyled">
              <li>
                {" "}
                &#8594; <a to="/#sc-about">About</a>
              </li>
              <li>
                {" "}
                &#8594; <a to="/#sc-beneficiary">Volunteers</a>
              </li>
              <li>
                {" "}
                &#8594; <a to="/#sc-bulletin">Contributors</a>
              </li>
              {/* <li>
                {" "}
                &#8594; <a to="/#sc-media">News</a>
              </li> */}
            </ul>
          </Col>
          <Col md={4}>
            <h4>Have a Question ?</h4>
            <ul className="list-unstyled">
              <li>
                <span>AINA</span>{" "}
              </li>
              <li>
                <span>aina.iitd@gmail.com</span>{" "}
              </li>
              <br />
              <li>
                <span>Rahul Jain</span>{" "}
              </li>
              <li>
                <span>8770915084 | rahuljain13101999@gmail.com</span>{" "}
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Covid-19 Care For Villages | All
              rights reserved | This website is made with &hearts;
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
