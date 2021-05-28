import kaivalya from './dp/kaivalya.jpg';
import './Teams.css'

const Team = () => (
  <section id='sc-team'>
    <h1>Our Team</h1>
    <div style={{ display: 'flex' }}>
      <div>
        <img src={kaivalya} className='dp-image' />
        <h5>Kaivalya Swami</h5>
      </div>
      <div>
        <img src={kaivalya} className='dp-image' />
        <h5>Rahul Jain</h5>
      </div>
      <div>
        <img src={kaivalya} className='dp-image' />
        <h5>Kaivalya Swami</h5>
      </div>
      <div>
        <img src={kaivalya} className='dp-image' />
        <h5>Kaivalya Swami</h5>
      </div>
      <div>
        <img src={kaivalya} className='dp-image' />
        <h5>Kaivalya Swami</h5>
      </div>
    </div>
  </section>
);

export default Team;
