import { useEffect } from "react";

// Define the props the child expects: a callback and a numeric `count` value.
// - `handleChange` is a function provided by the parent to update parent's state.
// - `count` is displayed by the child.
type ChildProps = {
  handleChange: () => void;
  count: number;
};

// Destructure props in the function parameters and annotate with `ChildProps`.
const Child = ({ handleChange, count }: ChildProps) => {
  // `useEffect` here logs when the child renders. The dependency array
  // `[handleChange, count]` ensures the effect runs when either the function
  // reference or the `count` value changes.
  useEffect(() => {
    console.log("Child component rendered");
  }, [handleChange, count]);

  return (
    <div>
      <h1>This is a child Component</h1>

      {/* Display the `count` value passed from the parent. */}
      <h1>ChildCount: {count}</h1>

      {/*
        The button's `onClick` handler is the `handleChange` function passed in
        from the parent. Clicking this triggers the parent's `setCount` via
        the memoized callback.
      */}
      <button onClick={handleChange}>Increment Count</button>
    </div>
  );
};

export default Child;
