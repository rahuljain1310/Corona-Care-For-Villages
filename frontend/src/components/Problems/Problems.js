import cover from "./Cover.jpg";
import "./Problems.css";

function Problems() {
  return (
    <section id = 'sc-problems'>
      <h1>About Us</h1>
      <p>
        The second wave of Covid-19 has made deep impacts in the Rural parts of India.
        And this is the time they need us the most! We are creating a network of organisations that are working on ground.
        From spreading awareness to curb vaccine hesitancy to providing medicine kits volunteers are working tirelessly.
        We aim to create a strategy that can customised and adopted by organisations or even individual volunteers on ground.
        We aim to aid these orgainisations on ground by providing medicine kits, and teleMedicine service by connecting doctors on need basis.
      </p>
      <img className='cover' src={cover}/>
    </section>
  )
}

export default Problems;