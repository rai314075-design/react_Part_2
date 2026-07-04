import { useState, useEffect } from "react";

// Custom hook: fetches data from a given URL and tracks loading/error state.
// The hook is generic so the caller can define the expected response shape.
const useFetch = <T = unknown>(url: string) => {
  // `data` will hold the fetched JSON result when available.
  const [data, setData] = useState<T | null>(null);
  // `loading` indicates whether the fetch is still in progress.
  const [loading, setLoading] = useState<boolean>(true);
  // `error` stores any Error that happens during the fetch.
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // The effect runs after the component mounts and whenever `url` changes.
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true); // start the loading state

        // Perform the HTTP request using the browser fetch API.
        const response = await fetch(url);

        // If the response is not OK (status 200-299), throw an error.
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON payload and cast it to the expected type `T`.
        const result = (await response.json()) as T;
        setData(result);
      } catch (err: unknown) {
        // In TypeScript, `catch` produces `unknown`, so we inspect the type.
        if (err instanceof Error) {
          setError(err); // preserve the original Error object
        } else {
          setError(new Error(String(err))); // convert non-Error values to Error
        }
      } finally {
        setLoading(false); // fetch finished, whether success or failure
      }
    };

    fetchData();
  }, [url]);

  // Return the state values so a component can consume them.
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
