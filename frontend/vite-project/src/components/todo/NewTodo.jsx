import { useEffect, useState } from "react";

function Tododiv({ id }) {
  const [todo, setTodo] = useState([]);
  const fetchtodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?id=" + id
    );
    const res = await response.json();
    setTodo(res[0]);
  };

  useEffect(() => {
    //settimeout with of delay 1 sec
    setTimeout(() => {
      fetchtodo();
    }, 1000);
  }, [id]); //with [] is dependency

  return (
    <div>
      {todo ? ( // Only render if the todo has been fetched
        <>
          <h2>{todo.id}</h2>
          <h3>{todo.title}</h3>
          <h4>{todo.completed ? "Completed" : "Not Completed"}</h4>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Tododiv;
