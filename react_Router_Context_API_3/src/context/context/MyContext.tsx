// Import createContext from React to build a Context object.
import { createContext } from "react";

// Define the shape of the context data using a TypeScript interface.
// This tells TypeScript what values the context should provide.
interface MyContextType {
	money: number;
	name: string;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	data?: string; // optional property; may or may not be present
};

// Provide a default value for the context. This object is used when
// a component consumes the context but is not wrapped by a provider.
const defaultValue: MyContextType = {
	money: 0,
	name: "",
	count: 0,
	setCount: () => {},
};

// Create the context with a typed default value. This returns an object
// with Provider and Consumer components, but usually only Provider is used.
const Mycontext = createContext<MyContextType>(defaultValue);

// Export the context so other components can import it and use the provider.
export default Mycontext;
