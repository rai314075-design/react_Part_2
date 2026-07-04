// `useId` is a React hook that generates a unique stable ID.
// It is useful for accessibility attributes and stable IDs across renders.
import { useId } from "react";

// `Item` is a child component that receives a `name` prop.
// The prop type is defined inline for TypeScript: `{ name: string }`.
function Item({ name }: { name: string }) {
  // Call `useId` inside the component body to get a unique ID for this render.
  // The ID stays stable across re-renders of this component instance.
  const id = useId();

  return (
    <div>
      {/* Render the received name and the generated ID. */}
      <span>Name: {name} :</span> ID: {id}
    </div>
  );
}

const UseIdHook = () => {
  // `data` is an array of strings that will be rendered as Item components.
  const data = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];

  return (
    <div>
      {/*
        Use `map()` to transform each string into an <Item> component.
        The `key` prop helps React identify which items changed, were added, or removed.
      */}
      {data.map((d) => (
        <Item key={d} name={d} />
      ))}
    </div>
  );
};

// Export the hook demo component so it can be used by App.tsx.
export default UseIdHook;
