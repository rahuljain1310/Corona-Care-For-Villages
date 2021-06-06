import React from 'react';
import "./Approach.css";
import medicalKits from "./Visuals/medical_kits.png";
import ration from "./Visuals/ration.jpg";
import doctor from "./Visuals/doctor.png";
import vaccine from "./Visuals/vaccine.jpeg";
import children from "./Visuals/children.jpg";
import awareness from "./Visuals/awareness.png";

function Approach() {
  return (
    <section id='sc-approach'>
      <h1>Our Approach</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas pellentesque quam risus, a viverra lacus finibus ut.
        Duis vehicula dui at dolor ornare, vitae vulputate ante ultrices.
        Nulla facilisi. Suspendisse et faucibus neque.
        Nulla felis lectus, malesuada at ligula eget, varius pretium mi.
        Pellentesque a hendrerit felis. Cras nunc sapien, mattis eget malesuada vel, hendrerit vel justo.
        Nullam tristique gravida urna, vel lacinia turpis feugiat quis.
      </p>
      <div className='flex-container'>
        <div className='approach-visual'>
          <img src={medicalKits}/>
          <h6>Medical Kits</h6>
        </div>
        <div className='approach-visual'>
          <img src={ration}/>
          <h6>Ration</h6>
        </div>
        <div className='approach-visual'>
          <img src={vaccine}/>
          <h6>Vaccine Sensitisation</h6>
        </div>
        <div className='approach-visual'>
          <img src={doctor}/>
          <h6>Doctor's Support</h6>
        </div>
        <div className='approach-visual'>
          <img src={children}/>
          <h6>Support To </h6>
          <h6>Covid Affected Children</h6>
        </div>
        <div className='approach-visual'>
          <img src={awareness}/>
          <h6>COVID Awareness</h6>
        </div>
      </div>
    </section>
  )
}

export default Approach;