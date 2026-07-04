import People from './People';

// Village renders the People component, which consumes context values.
// This file shows that many nested components can exist between provider and consumer.
const Village = () => {
  return (
    <div>
      <h1>Village Component</h1>
      <People />
    </div>
  );
};

export default Village;

