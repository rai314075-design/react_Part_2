import { useEffect, useState } from "react";

interface Post {
  id: string | number;
  title: string;
  body: string | number;
}

const FetchData = () => {
  const [API, setAPI] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data: Post[] = await response.json();
      console.log("My data = ", data);
      setAPI(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {API.map((item) => (
        <div
          key={item.id}
          style={{
            textAlign: "center",
            backgroundColor: "red",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{item.title}</h2>
          <h3>{item.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
