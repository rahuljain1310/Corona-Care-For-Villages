// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";

// const Footer = () => {
//   return (
//     <Box>
//       <Container>
//         <Row>
//           {/* <Column>
//             <Heading>About Us</Heading>
//             <FooterLink href="#">Aim</FooterLink>
//             <FooterLink href="#">Vision</FooterLink>
//             <FooterLink href="#">Testimonials</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column> */}
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="tel:+919988040290">+91 99880 40290</FooterLink>
//             <FooterLink href="mailto:aina.iitd@gmail.com">aina.iitd@gmail.com</FooterLink>
//             <FooterLink href="https://www.facebook.com/aina.iitd/">Facebook</FooterLink>
//           </Column>
//           {/* <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column> */}
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;

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
                <span>Nipun Garg</span>{" "}
              </li>
              <li>
                <span>99880 40290 | cs1160316@iitd.ac.in</span>{" "}
              </li>
              <br />
              <li>
                <span>Rahul Jain</span>{" "}
              </li>
              <li>
                <span>87709 15084 | rahuljain13101999@gmail.com</span>{" "}
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
