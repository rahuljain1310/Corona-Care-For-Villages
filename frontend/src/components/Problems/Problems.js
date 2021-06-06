import cover from "./Cover.jpg";
import "./Problems.css";

function Problems() {
  return (
    <section id = 'sc-problems'>
      <h1>Impact</h1>
      <p>
        Second wave of COVID-19 has deeply impacted India, already affecting millions
        of families, and still killing thousands of people everyday. The rural parts of India are especially impacted, and even though the wave may seem subsided, there are huge aftermaths of the pandemic, including death of the lone breadwinner among many families, massive unemployment, and a gloomy future for thousands of children. Inadequate healthcare infrastructure, 
        insufficient testing and treatment of COVID, and distrust in modern medicine are making things worse in villages.
      </p>
      <img className='cover' src={cover}/>
    </section>
  )
}

export default Problems;