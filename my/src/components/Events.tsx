//WHAT IS EVENTS IN REACT WITH EXAMPLE

// This is a React component that demonstrates basic events and dynamic styling.
// It uses functional components and JSX.

const Event = () => {
  // Function to show an alert message when clicked.
  const showAlert = () => {
    alert("This my brand new alert with event");
  };

  // Function to toggle background between light and dark mode.
  // It checks the current background color and switches accordingly.
  const bg_light = () => {
    if (document.body.style.backgroundColor === "black") {
      // Switch to light mode
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      // Switch to dark mode
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };

  const count: number = 0;
  console.log("This is the before" + count);

  const counter = (value: number) => {
    // count = value;
    alert("This is new alert " + value);
    console.log("This is the after" + count);
  };

  // Placeholder for a potential dark mode function (currently commented out)
  // This would change the background to dark colors.
  // const bg_dark = () => {
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.color = "white";
  // };

  return (
    <>
      <h1>Events</h1>
      <h1>counter = {count}</h1>
      {/* Button that triggers the showAlert function when clicked */}
      <button onClick={showAlert}>Click</button>

      <div>
        {/* Button that changes the background to light mode when clicked */}
        <button onClick={bg_light}>Change_To_light</button>

        <button onClick={() => counter(20)}>clock for plus the count</button>

        {/* Button that would change to dark mode if enabled (currently commented out) */}
        {/* <button onClick={bg_dark}>Change_To_dark</button> */}
      </div>
    </>
  );
};

// Export the App component as the default export for use in other files.
export default Event;
