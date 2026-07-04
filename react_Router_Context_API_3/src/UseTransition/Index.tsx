import { useState, useTransition } from "react";

const Index = () => {
  // `text` stores the current input value.
  // `setText` updates that state and triggers a re-render.
  const [text, setText] = useState("");

  // `list` stores the generated list of strings.
  // `useState<string[]>([])` initializes it as an empty array of strings.
  const [list, setList] = useState<string[]>([]);

  // `useTransition` returns a pending state and a function to start a transition.
  // `isPending` becomes true while React defers the update inside `startTransition`.
  const [isPending, startTransition] = useTransition();

  // Maximum number of items to render in the visible list.
  // Rendering too many DOM nodes can cause the page to lag.
  const MAX_VISIBLE_ITEMS = 1000;
  const visibleList = list.slice(0, MAX_VISIBLE_ITEMS);

  // `handleChange` is called whenever the text input changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Immediately update the controlled input value.
    setText(value);

    // Defer the expensive list generation work.
    // This keeps the UI responsive while React updates the large list.
    startTransition(() => {
      const newList: string[] = [];
      for (let i = 0; i < 100000; i++) {
        newList.push(`${value} => ${i}`);
      }
      setList(newList);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Controlled input: value comes from state, and onChange updates state. */}
      <input
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
        type="text"
        value={text}
        placeholder="type here"
        onChange={handleChange}
      />

      {/* Show a loading indicator while the transition is pending. */}
      {isPending && <h2>Loading...</h2>}

      {/* Render only the first `MAX_VISIBLE_ITEMS` values to avoid excessive DOM updates. */}
      <ul>
        {visibleList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Inform the user when the list is truncated for performance reasons. */}
      {list.length > MAX_VISIBLE_ITEMS && (
        <p>Showing first {MAX_VISIBLE_ITEMS} of {list.length} items.</p>
      )}
    </div>
  );
};

export default Index;
