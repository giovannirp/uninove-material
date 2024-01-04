import { useState } from "react";

import "./style.css";

export function Contador() {
  // usando hooks 
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    setCounter(counter + 1);
  }

  const handleClickDecrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Contador</h1>

      <div className="buttons">
        <button onClick={handleClickIncrement}>Increment</button>
        <button onClick={handleClickDecrement}>Decrement</button>
      </div>

      <div className="result">
        <strong>{counter}</strong>
      </div>
    </div>
  )
}