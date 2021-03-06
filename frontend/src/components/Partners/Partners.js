import React from "react";
import { Col, Row } from "react-bootstrap";
import sewa_logo from './sewa_logo.png';
import shiv_ganga_logo from './shiv_ganga_logo.jpg';
import "./Partners.css";


const PartnerTile = ({imgsrc, villages}) => {
  return (
    <div className='tile'>
        <img src={imgsrc} width="160px"/>
        <span>
          <h3>Sewa International</h3>
          <h4>{villages} Villages Covered</h4>
        </span>
    </div>
  )
}

const Partners = () => (
  <section id='sc-partners'>
    <h1>Organizations</h1>
    <div style={{flexWrap:'wrap', display:'flex', justifyContent: 'space-evenly'}}>
      {/* <img style={{ width: '200px', margin: 'auto' }} src={sewa_logo} /> */}
      {/* <img style={{width: '200px', margin: 'auto'}} src={shiv_ganga_logo}/> */}
      <PartnerTile imgsrc={sewa_logo} villages={30}/>
      <PartnerTile imgsrc={shiv_ganga_logo} villages={30}/>

    </div>
  </section>
);

export default Partners;
