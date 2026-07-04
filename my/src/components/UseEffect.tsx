// Import the useEffect hook - runs side effects in functional components (e.g., updating document.title)
import { useEffect } from "react";
// Import the useState hook - manages state in functional components, returns [currentValue, setterFunction]
import { useState } from "react";

const UseEffect = () => {
  // useState(0) creates a state variable 'counter' initialized to 0
  // setCounter is the setter function to update this state
  const [counter, setCounter] = useState(0);

  // useEffect runs after every render by default
  // The callback function runs after the component mounts or updates
  useEffect(() => {
    console.log("useEffect is running");
    // Side effect: update the browser tab title to show current count
    document.title = `Counter = ${counter}`;
  }, [counter]); // Dependency array: effect re-runs when 'counter' changes
                 // Empty [] would run only once on mount; omitting it runs every render

  // JSX return - renders the current count and buttons to change it
  return (
    <div>
      <h1>Counter = {counter}</h1>
      {/* When clicked, setCounter updates state, triggering re-render and useEffect */}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default UseEffect;
