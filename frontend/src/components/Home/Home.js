import React from "react";
import { Row, Col, Container, Jumbotron, Image, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import header from "./Images/header.jpg";
import vaccine from "./Images/vaccine.png";
import medicine from "./Images/medicines.png";
import voluImg from "./Svgs/volunteer.svg";
import doctImg from "./Svgs/doctor-surgeon.svg";
import donaImg from "./Svgs/donate-donation.svg";
import Header from "../Header/Header";
import after_back from "./Images/banner-after.png";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Row>
        <Col>
          {/* <div className='left-pane'>
            <img style={{width: '40%', display: 'inline-block'}} src={vaccine}/>
          </div> */}
          <div className='left-pane'>
            {/* <div className='circle'> */}
              <div style={{ display: 'inline-block' }}>
                <span style={{ fontSize: '3em' }}>COVID CARE</span> <br />
                <span style={{ fontSize: '2em' }}>For Villages</span> <br/>
                {/* <img style={{width: '25%', display: 'inline-block'}} src={medicine}/> */}
                <img style={{width: '25%', display: 'inline-block'}} src={medicine}/>
                {/* <img style={{width: '25%', display: 'inline-block'}} src={medicine}/> */}
                {/* <img style={{width: '25%', display: 'inline-block'}} src={medicine}/> */}
              {/* </div> */}
            </div>
          </div>
        </Col>
        <Col>
          <div className='left-pane'>
            <h1>Our Mission</h1>
            <div>
              We, in collaboration with NGOs and volunteers at ground are aiming to provide <span>Medicine Kits</span> and connecting <span>Doctors</span> to <span>Patients</span> in rural areas. 
              <br></br>
              <span><a href="/#sc-initiative">We need your help!</a></span> 
            </div>
            {/* <Row>
              <Col><Button size='lg' variant='success'>Donate</Button></Col>
              <Col><Button size='lg' variant='success'>Doctor</Button></Col>
              <Col><Button size='lg' variant='success'>Volunteer</Button></Col>
            </Row> */}
          </div>
        </Col>
      </Row>
      <img style={{width: '100%'}} src={after_back}/>
    </div>
  )
}

// function Home() {
//   return (
//     <div>
//       <Row>
//         <Col lg={7} className="mx-auto">
//           <img src={header} width="100%" />
//           <h1 className="header">Corona Care for Villages</h1>
//         </Col>
//       </Row>
//       <div className="join-initiative"> Join The Initiative !</div>
//       <Row>
//         <Container>
//           <Row className="mx-auto">
//             <Col lg={4} className="mx-auto d-block">
//               <a href="https://www.google.co.in">
//                 <div className="mb-2 text-center">
//                   <Image style={{ width: "100px" }} src={voluImg} fluid />
//                   <center style={{ margin: "16px", fontSize: "2em" }}>
//                     <p>Volunteer</p>
//                   </center>
//                 </div>
//               </a>
//             </Col>
//             <Col lg={4} className="mx-auto d-block">
//               <a href="https://www.google.co.in">
//                 <div className="mb-2 text-center">
//                   <Image style={{ width: "100px" }} src={doctImg} fluid />
//                   <center style={{ margin: "16px", fontSize: "2em" }}>
//                     <p>Doctor</p>
//                   </center>
//                 </div>
//               </a>
//             </Col>
//             <Col lg={4} className="mx-auto d-block">
//               <a href="https://www.google.co.in">
//                 <div className="mb-2 text-center">
//                   <Image style={{ width: "100px" }} src={donaImg} fluid />
//                   <center style={{ margin: "16px", fontSize: "2em" }}>
//                     <p>Donate</p>
//                   </center>
//                 </div>
//               </a>
//             </Col>
//           </Row>
//         </Container>
//       </Row>
//     </div>
//   );
// }

export default Home;
