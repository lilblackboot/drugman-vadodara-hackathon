import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import donut from '/Images/donut.png';
import D from '/Images/Group 1.svg';
import n from '/Images/n.svg';
import r from '/Images/r.svg';
import g from '/Images/g.svg';
import m from '/Images/m.svg';
import a from '/Images/a.svg';
import u from '/Images/u.svg';

function App() {
  const [count, setCount] = useState(0);

  const example = () => {
    console.log("Explore clicked");
    // Add your explore functionality here
  };

  return (
    <>
      <div id="main">
        <div className="loader">
          <h2 className="zoom">DRUGMAN</h2>
          <h1 className="scramble">DRUGMAN</h1>
          <div className="Loading"></div>
        </div>
        <div className="svgwaala">
          <div id="dotted">
            <img id="donut" src={donut} alt="Donut" />
            <img id="D" src={D} alt="D" />
            <img id="n" src={n} alt="n" />
            <img id="r" src={r} alt="r" />
            <img id="g" src={g} alt="g" />
            <img id="m" src={m} alt="m" />
            <img id="a" src={a} alt="a" />
            <img id="u" src={u} alt="u" />
          </div>
          <div id="explore">
            <h1 onClick={() => setTimeout(example, 1200)}>Explore</h1>
          </div>
        </div>
        <div>
          <h1>welcome</h1>
        </div>
      </div>
      {/* If these scripts are necessary, include them, but they should ideally be moved to the public/index.html or equivalent */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="descrambler.js"></script>
      <script src="script.js"></script>
    </>
  );
}

export default App;
