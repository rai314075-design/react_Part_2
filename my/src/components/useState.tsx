// Import the useState hook from React - lets you add state to functional components
import { useState } from "react";

const UseState = () => {
  // useState(0) creates state with initial value 0, returns [value, setValue] tuple
  // counter = current state value, setCounter = function to update it
  const [counter, setCounter] = useState(0);

  const increase = () => {
    // counter++;
    // console.log("increase",counter);
    setCounter(counter + 1);
    setCounter((prev) => prev + 1);//
  };

  const decrease = (value: number) => {
    // counter--;
    // console.log("decrease", counter);
    setCounter(counter - value);
  };
  return (
    <>
      <h1>Counter = {counter}</h1>

      <button onClick={increase}>increase</button>
      <button onClick={() => decrease(100)}> decrease</button>
    </>
  );
};

export default UseState;
