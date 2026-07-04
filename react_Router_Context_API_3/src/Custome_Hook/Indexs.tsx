import useFetch from "./useFetch";

// Define the shape of a single todo item returned by the API.
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Indexs = () => {
  // Use the custom hook with a type argument Todo[] to indicate an array of todos.
  const { data, loading, error } = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );

  // This log shows the returned data in the browser console.
  console.log("Data Fetching from custom Hook", data);

  // If `loading` is true, the request is still in progress.
  if (loading) return <p>loading data...</p>;

  // If an error occurred, render the error message.
  if (error) return <p>Error :- {error.message}</p>;

  // If the fetch finished without error but returned no data, show a fallback.
  if (!data) return <p>No data available.</p>;

  // Render the fetched todo list once the data is ready.
  return (
    <div>
      <h1>Custom Hook Demo</h1>
      <p>This component is now exported as the default export.</p>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Indexs;
