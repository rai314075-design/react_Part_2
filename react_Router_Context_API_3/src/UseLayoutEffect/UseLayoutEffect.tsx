import { useState, useLayoutEffect } from "react";

// UseLayoutEffect demonstrates the useLayoutEffect hook.
// useLayoutEffect runs after React has updated the DOM but before the browser paints.
// It is useful for synchronously applying DOM updates based on current state.
const UseLayoutEffect = () => {
  // `Color` stores the current page background color.
  const [Color, setColor] = useState("black");
  useLayoutEffect(() => {
    document.body.style.backgroundColor = Color;
    console.log("useLayoutEffect");
  }, [Color]);

  // Updating local `Color` state triggers useLayoutEffect and changes the background.
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        gap: "10px",
      }}
    >
      <h1>Current Background Color: {Color}</h1>
      <button style={{ margin: "5px",height:"40px",width:"10%" }} onClick={() => setColor("lightcoral")}>
        Change to Light Coral
      </button>
      <button style={{ margin: "5px",height:"40px",width:"10%" }}  onClick={() => setColor("lightblue")}>
        Change to Light Blue
      </button>
      <button style={{ margin: "5px",height:"40px",width:"10%" }} onClick={() => setColor("lightgreen")}>
        Change to Light Green
      </button>
    </div>
  );
};

export default UseLayoutEffect;
