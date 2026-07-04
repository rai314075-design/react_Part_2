import { useState, useMemo } from "react";

const Index = () => {
  // useState stores component state and gives a setter for updates.
  // `count` is just a state value that demonstrates re-renders.
  const [count, setCount] = useState(0);

  // `num` is the value used by the expensive calculation.
  const [num, setNum] = useState(10);

  // useMemo caches the result of the expensive function.
  // The callback only re-runs when `num` changes, preventing wasted work
  // during renders caused by updating other state values like `count`.
  const multiNum = useMemo(() => {
    for (let i = 0; i < 1000; i++) {
      console.log("multiNum is running");
    }

    return num * 2;
  }, [num]);

  const result = multiNum;

  return (
    <div>
      {/* Render the memoized result. */}
      <h1>Result: {result}</h1>

      {/* Incrementing count re-renders the component but does not recompute multiNum. */}
      <button onClick={() => setCount(count + 1)}>Increase count</button>

      {/* Changing num forces useMemo to recompute the expensive value. */}
      <button onClick={() => setNum(num + 1)}>Increase Num</button>

      {/* Show current num and count values for clarity. */}
      <h1>Num : {num}</h1>
      <h4>Count : {count}</h4>
    </div>
  );
};

export default Index;
