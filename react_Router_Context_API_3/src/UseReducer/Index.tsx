// React hooks are imported from the react package.
// useReducer is used for state transitions with reducer logic.
// useState is used for local UI state such as colors.
import { useReducer, useState } from "react";
import type { CSSProperties } from "react";

// reducer function accepts current state and an action object.
// The action.type determines how the count value changes.
const counterReducer = (counter: number, action: { type: string | number }) => {
  switch (action.type) {
    case "increment":
      return counter + 1; // increase counter by 1
    case "decrement":
      return counter - 1; // decrease counter by 1
    case "reset":
      return 0; // reset counter back to initial value
    case "incrementBy5":
      return counter + 5; // increase counter by 5
    case "incrementBy10":
      return counter + 10; // increase counter by 10
    case "decrementBy100":
      return counter - 100; // decrease counter by 100
    default:
      return counter; // return current state for unknown actions
  }
};

const Index = () => {
  // useReducer returns state and dispatch function.
  // counterReducer is called whenever dispatch() is used.
  const [count, dispatch] = useReducer(counterReducer, 0); // 0 is the initial state for count

  // Local UI state for the screen background and decrement button color.
  const [screenColor, setScreenColor] = useState("black");
  const [decrementButtonColor, setDecrementButtonColor] = useState("red");

  // CSSProperties is a TypeScript type for inline style objects.
  const style: CSSProperties = {
    height: "100vh",
    width: "100%",
    backgroundColor: screenColor, // uses current screenColor state
    color: "white",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
      {/* Show the current count value from reducer state. */}
      <h1>Count = {count}</h1>

      {/* Increment button updates count and restores default colors. */}
      <button
        style={{ backgroundColor: "green", color: "black" }}
        onClick={() => {
          setScreenColor("black");
          setDecrementButtonColor("red");
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>

      {/* Decrement button updates count and restores default colors. */}
      <button
        style={{ backgroundColor: decrementButtonColor, color: "black" }}
        onClick={() => {
          setScreenColor("black");
          setDecrementButtonColor("red");
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>

      {/* Reset button sets screen to red and the decrement button to yellow. */}
      <button
        style={{ backgroundColor: "blue", color: "black" }}
        onClick={() => {
          setScreenColor("red");
          setDecrementButtonColor("yellow");
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>

      {/* Increment by 5 button updates count and restores default colors. */}
      <button
        style={{ backgroundColor: "orange", color: "black" }}
        onClick={() => {
          setScreenColor("black");
          setDecrementButtonColor("red");
          dispatch({ type: "incrementBy5" });
        }}
      >
        Increment by 5
      </button>

      {/* Increment by 10 button updates count and restores default colors. */}
      <button
        style={{ backgroundColor: "purple", color: "black" }}
        onClick={() => {
          setScreenColor("black");
          setDecrementButtonColor("red");
          dispatch({ type: "incrementBy10" });
        }}
      >
        Increment by 10
      </button>

      {/* Decrement by 100 button updates count and restores default colors. */}
      <button
        style={{ backgroundColor: "brown", color: "black" }}
        onClick={() => {
          setScreenColor("black");
          setDecrementButtonColor("red");
          dispatch({ type: "decrementBy100" });
        }}
      >
        Decrement by 100
      </button>
    </div>
  );
};

export default Index;
