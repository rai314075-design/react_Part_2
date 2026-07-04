// useState is a React hook for local component state.
import { useState } from "react";
// Import the context object created in MyContext.tsx.
import MyContext from "./MyContext";

// Money is a context provider component that wraps children components
// and supplies shared values through React Context.
const Money = (props: { children: React.ReactNode }) => {
  // local values that will be shared through the context
  const money = 1000;
  const name = "Rajveer Ray";
  const [count, setCount] = useState(0);
  const data = "Superman";

  // If `count` reaches 10, the wrapper background turns red.
  // This changes the screen appearance based on context state.
  const wrapperStyle = {
    minHeight: "100vh",
    backgroundColor: count === 10 ? "red" : "transparent",
  };

  // The Provider component makes the `value` object available to any
  // child component that calls useContext(MyContext).
  return (
    <div style={wrapperStyle}>
      <MyContext.Provider value={{ money, name, count, setCount, data }}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
};

// Export the provider component so it can wrap the app or specific parts
// of the component tree where the context should be available.
export default Money;
