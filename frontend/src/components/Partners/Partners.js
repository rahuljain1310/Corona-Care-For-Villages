import React from "react";
import sewa_logo from './sewa_logo.png';
import shiv_ganga_logo from './shiv_ganga_logo.jpg';

const Partners = () => (
  <section id='sc-partners'>
    <h1>Partners</h1>
    <div>
      <img style={{ width: '200px', margin: 'auto' }} src={sewa_logo} />
      <img style={{width: '200px', margin: 'auto'}} src={shiv_ganga_logo}/>
    </div>
  </section>
);

export default Partners;
