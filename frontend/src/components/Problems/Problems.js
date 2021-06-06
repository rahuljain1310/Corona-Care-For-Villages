import cover from "./Visuals/Cover.png";
import "./Problems.css";

function Problems() {
  return (
    <section id = 'sc-problems'>
      <h1>Need Validation</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus egestas, urna eget consectetur euismod, ipsum lectus volutpat dolor,
        ac congue risus ante vitae nibh. Duis commodo placerat ex, ut ultrices sem fermentum ut.
        Fusce sit amet risus ac dolor facilisis congue at et lacus. Duis non ullamcorper nulla.
        Sed ornare tellus vel lacinia blandit. Nunc pulvinar, justo sit amet laoreet maximus,
        dolor lacus auctor lorem, quis lobortis leo mi ut erat.
        Mauris hendrerit eros in justo interdum placerat.
      </p>
      <img className='cover' src={cover}/>
    </section>
  )
}

export default Problems;