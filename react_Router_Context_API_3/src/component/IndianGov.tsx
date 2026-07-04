import StateGov from "./StateGov";

// IndianGov is the top-level component in the context consumer tree.
// It renders StateGov, which continues the nested component hierarchy.
const IndianGov = () => {
  return (
    <div>
      <h1>IndianGov Component</h1>
      <StateGov />
    </div>
  );
};

export default IndianGov;
