import { useState, useCallback } from "react";
import Child from "./Child";

// `Callback` demonstrates using `useState` for local state and `useCallback`
// to memoize a callback function passed down to a child component.
// Memoizing the callback helps avoid unnecessary re-creation of the function
// when the parent re-renders for unrelated state changes.
const Callback = () => {
  // `count` stores the value shown by the child; `setCount` updates it.
  const [count, setCount] = useState(0);

  // `increment` shows another independent piece of state in the parent.
  // Updating `increment` will re-render the parent but should not cause
  // unnecessary re-creation of `handleChange` when we memoize it.
  const [increment, setIncrement] = useState(0);

  // `useCallback` returns a memoized version of the callback that only
  // changes when values in the dependency array change. Here the function
  // depends on `count`, so it will be re-created whenever `count` changes.
  // This is useful when passing callbacks to optimized child components
  // that rely on reference equality to avoid extra work.
  const handleChange = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      {/* Pass `handleChange` and `count` as props to the child. */}
      <Child handleChange={handleChange} count={count} />

      {/* Show the parent's independent `increment` state. */}
      <h1>Increment: {increment}</h1>

      {/* Simple heading to indicate this is the parent. */}
      <h1> This is the Parent Component </h1>

      {/*
        The `onClick` handler receives a function. Here we pass an inline
        arrow function which calls `setIncrement` with the new value.
      */}
      <button onClick={() => setIncrement(increment + 1)}>
        Increment Parent Count
      </button>
    </div>
  );
};

export default Callback;
