import Village from "./Village";

// Block is another layer of nested components.
// It renders Village, which eventually contains the context consumer.
const Block = () => {
  return (
    <>
      <h1>Block Component</h1>
      <Village />
    </>
  );
};

export default Block;
