import District from "./District";

// StateGov is a nested component in the context hierarchy.
// It simply renders District, showing how context can flow through multiple layers.
const StateGov = () => {
  return (
    <>
      <h1>State Gov Component</h1>
      <District />
    </>
  );
};

export default StateGov;
