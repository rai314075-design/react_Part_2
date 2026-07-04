import Block from "./Block";

// District is another intermediate component in the context tree.
// It continues passing the component tree deeper toward the consumer.
const District = () => {
  return (
    <>
      <h1>District Component</h1>
      <Block />
    </>
  );
};

export default District;
