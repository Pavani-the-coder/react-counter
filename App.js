import React from "react";
import { useState } from "react";
import './app.css';
function App() {
  const increment=()=>{
    setCounter(counter+1);
  }

  const decrement=()=>{
    setCounter(counter-1);
  }
  const[counter,setCounter]=useState(0);
  return (
  
    <div className="App">
      <p>{counter}</p>
      <button onClick={increment}>
        Increase
      </button>
      <button onClick={decrement}>
        Decrease
      </button>
      </div>
  );
}

export default App;
