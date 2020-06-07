import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Hello World</p>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
