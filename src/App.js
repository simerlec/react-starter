import React, { useState } from 'react';
import { render } from 'react-dom';
import root from './style.css';

import react_logo from './assets/img/react.png';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={root.container}>
      <img className={root.logo} src={react_logo} alt="react icon"></img>
      <p className={root.green}>Hello World</p>
      <div className={root.greenAndLarge}>Counter: {counter}</div>
      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>Inc</button>
        <button onClick={() => setCounter(counter - 1)}>Dec</button>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
