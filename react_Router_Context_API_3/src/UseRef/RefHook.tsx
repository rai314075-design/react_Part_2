import { useRef } from "react";

const RefHook = () => {
  // useRef returns a mutable object with a .current property.
  // In this case we use it to hold a reference to the div DOM element.
  // The ref object stays the same between renders.
  const boxRef = useRef<HTMLDivElement | null>(null);

  const ChangeColor = () => {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];

    // Pick a random color from the array.
    const nextColor = colors[Math.floor(Math.random() * colors.length)];

    // If the div is mounted, update its inline style directly.
    // boxRef.current points to the DOM node because we attached it with ref={boxRef}.
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = nextColor;
    }
  };

  console.log("Rendering RefHook component");

  return (
    <div
      // Attach the ref to the div so boxRef.current becomes this DOM element.
      ref={boxRef}
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <button onClick={ChangeColor}>Change background Color</button>
    </div>
  );
};

export default RefHook;
