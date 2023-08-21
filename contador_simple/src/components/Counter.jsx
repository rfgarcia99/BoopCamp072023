import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1)
  };

  return (
    <div className="counter-container">
      <h2>Contador</h2>
      <div className="counter">
        <button onClick={decrement}>Decrementar</button>
        <p>{count}</p>
        <button onClick={increment}>Incrementar</button>
      </div>
    </div>
  );
};

export default Counter;
