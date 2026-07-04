// App is the top-level React component for the application.
// It imports Product from another file and renders it here.
// This is the main route from App.tsx into the Product component.
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default App;
