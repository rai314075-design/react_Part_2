import { useContext } from 'react';
import MyContext from '../context/context/MyContext';

// People consumes the shared context values using useContext.
// useContext reads the current value from MyContext.Provider above the tree.
const People = () => {
  // Destructure the values provided by MyContext.
  const { money, name, count, setCount, data } = useContext(MyContext);

  return (
    <div>
      <h1>Welcome to People Component</h1>
      <h1>Money: {money}</h1>
      <h1>Name: {name}</h1>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>
      {/* Clicking these buttons updates the shared `count` value in context. */}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
};

export default People;