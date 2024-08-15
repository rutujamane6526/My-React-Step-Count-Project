import React, { useState } from "react";

function App()
{
  const [step, setStep] = useState(1); 
  const [count, setCount] = useState(0);
  return(
    <>
      <div className="inside-container">
        <button onClick={ () => {
          setStep(step - 1);
        }}>-</button>
        <h2>Step: {step} </h2>
        <button onClick={ () => {
          if (step < 10) setStep(step + 1);
        }}>+</button>
      </div>

      <div className="inside-container">
        <button onClick={ () => {
         if(step > 0) setCount(count - step);
        }}>-</button>
        <h2>Count: {count}</h2>
        <button onClick={ 
          function(){
            setCount(count + step);
          }}>+</button>
      </div>

      <div className="result">
        <p> 
          Your count is <b>{count}</b> and step is <b>{step}</b>
        </p>
      </div>
    </>
  );
}

export default App;
