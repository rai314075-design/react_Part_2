import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Money from "./context/context/Money.tsx";

// createRoot initializes the React rendering tree into the root DOM node.
// The <Money> provider wraps <App />, so any component inside App can
// access the shared context values provided by Money.
createRoot(document.getElementById("root")!).render(
  <Money>
    <App />
  </Money>,
);
