// App.tsx
// - Root application component.
// - Imports child components and provides top-level data/props.
// - Syntax notes:
//   - `import X from "..."` brings in a module's default export.
//   - `const App = () => { ... }` defines a React functional component.
//   - Inside the component we can declare variables (e.g., `money`) and
//     then return JSX to describe the UI.
import IndianGov from "./components/IndianGov"

const App = () => {
  // `money` is a local variable holding a numeric value.
  const money = 1000
  // `Name` is a string that we'll pass as a prop to the child.
  const Name = "Rajveer";

  // The returned JSX looks like HTML but allows embedding JS expressions
  // inside `{}`. Here we render `IndianGov` and pass props via attributes.
  return (
    <div>
      {/* Pass props `money` and `name` to the IndianGov component */}
      <IndianGov money={money} name={Name} />
    </div>
  )
}

// Default export: other files can import `App` using `import App from './App'`.
export default App