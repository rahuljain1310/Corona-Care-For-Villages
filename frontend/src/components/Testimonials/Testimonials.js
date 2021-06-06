import React from 'react';
import { Carousel, Row, Col} from "react-bootstrap";
import "./Testimonials.css";
import nipun_dp from "./dp/nipun.jpg";
import kaivu from "./dp/kaivu.jpg";
import after_back from "../Home/Images/banner-after.png";

function Testimonials() {
  return (
    <div id='sc-testimonials'>
      <img style={{width: '100%', maxHeight: '80px'}} className='rotate180' src={after_back}/>
      <section >
        <h1>Testimonials</h1>
        <Carousel className='testimonial-carousal'>
          <Carousel.Item>
            <div className='testimonial-box'>
            <Row>
              <Col lg={4}><img src={nipun_dp} className='testimonial-dp'/></Col>
              <Col>
                <h2>Nipun Garg</h2>
                <h5>IITD Alumni</h5>  
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus egestas, urna eget consectetur euismod, ipsum lectus volutpat dolor,
                  ac congue risus ante vitae nibh. Duis commodo placerat ex, ut ultrices sem fermentum ut.
                  Fusce sit amet risus ac dolor facilisis congue at et lacus. Duis non ullamcorper nulla.
                  Sed ornare tellus vel lacinia blandit. Nunc pulvinar, justo sit amet laoreet maximus,
                  dolor lacus auctor lorem, quis lobortis leo mi ut erat.
                  Mauris hendrerit eros in justo interdum placerat.
                </p>
              </Col>
            </Row>
          </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='testimonial-box'>
            <Row>
              <Col lg={4}><img src={kaivu} className='testimonial-dp'/></Col>
              <Col>
                <h2>Kaivalya Swami</h2>
                <h5>IITD Alumni</h5>  
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus egestas, urna eget consectetur euismod, ipsum lectus volutpat dolor,
                  ac congue risus ante vitae nibh. Duis commodo placerat ex, ut ultrices sem fermentum ut.
                  Fusce sit amet risus ac dolor facilisis congue at et lacus. Duis non ullamcorper nulla.
                  Sed ornare tellus vel lacinia blandit. Nunc pulvinar, justo sit amet laoreet maximus,
                  dolor lacus auctor lorem, quis lobortis leo mi ut erat.
                  Mauris hendrerit eros in justo interdum placerat.
                </p>
              </Col>
            </Row>
          </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <img style={{width: '100%', maxHeight: '80px'}} src={after_back}/>
    </div>
  )
}

export default Testimonials