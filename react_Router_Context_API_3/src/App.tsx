
import Indexs from './Custome_Hook/Indexs';
// `App` is the root component of the React application.
// When React renders this component, it returns a div containing the `UseId` demo.
const App = () => {
  return (
    <div>
      {/* Render the UseIdHook component. */}
     <Indexs />
    </div>
  );
};

// Export `App` as the default export so other files can import it using `import App from './App'`.
export default App;
