import React from 'react';
import "./Donate.css";
import Header from "../Header/Header"
import { Row, Col, Button } from 'react-bootstrap';
import after_back from "../Home/Images/banner-after.png";

function Donate() {
  return (
    <div className='home'>
      <Header />
      <section id="sc-donate">
        <h1>Donate</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras venenatis arcu ut pulvinar vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed elementum convallis diam, non congue augue dignissim eu.
          Donec ac fermentum sem, ac bibendum metus.
          Maecenas imperdiet tellus et malesuada pulvinar.
        </p>
        <br/>
        <Row>
          <Col>
            <div className='donate-card'>
              <span style={{ float: 'right'}}>
                <Button size='lg' variant='outline-success'>
                  <a href='https://milaap.org/fundraisers/support-villages-to-tackle-the-covid-pandemic'  target='blank'>
                    Contribute
                  </a>
                </Button>
              </span>
              <h2>Milaap</h2>
              <hr/>
              {/* <br/> <br/> */}
              <h6>Step 1</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras venenatis arcu ut pulvinar vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed elementum convallis diam, non congue augue dignissim eu.
                Donec ac fermentum sem, ac bibendum metus.
                Maecenas imperdiet tellus et malesuada pulvinar.
              </p>
              <br/>
              <h6>Step 2</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras venenatis arcu ut pulvinar vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed elementum convallis diam, non congue augue dignissim eu.
                Donec ac fermentum sem, ac bibendum metus.
                Maecenas imperdiet tellus et malesuada pulvinar.
              </p>

            </div>
          </Col>
          <Col>
            <div className='donate-card'>
              <span style={{ float: 'right' }}>
                <Button size='lg' variant='outline-success'>
                  <a href='https://payu.in/web/7308297958A843714C18CBBDF3E4006B' target='blank'>
                    Contribute
                  </a>
                </Button>
              </span>
              <h2>PayU</h2>
              <hr />
              <h6>Step 1</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras venenatis arcu ut pulvinar vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed elementum convallis diam, non congue augue dignissim eu.
                Donec ac fermentum sem, ac bibendum metus.
                Maecenas imperdiet tellus et malesuada pulvinar.
              </p>
              <br/>
              <h6>Step 2</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras venenatis arcu ut pulvinar vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed elementum convallis diam, non congue augue dignissim eu.
                Donec ac fermentum sem, ac bibendum metus.
                Maecenas imperdiet tellus et malesuada pulvinar.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <img style={{width: '100%'}} src={after_back}/>
    </div>
  )
}

export default Donate;