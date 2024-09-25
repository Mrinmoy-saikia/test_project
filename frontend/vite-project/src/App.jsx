import { useState } from "react";
import "./App.css";
import Todos from "./components/todo/Todos";
// import { Todos } from "./components/todo/Todos";

function App() {
  const [data, setData] = useState(null);

  const baseUrl = "http://localhost:3000";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: "mrinmoy@gmail.com",
      title: "huholh",
    }),
  };

  const apiHandler = async () => {
    const response = await fetch("http://localhost:3000/todo");
    const res = await response.json();
    setData(res);
  };
  console.log("data ", data);
  const name = "Afridi";
  const title = "Todo app";

  const age = 26;
  return (
    <>
      <div>
        {/* <button onClick={apiHandler}>call api</button>
        {data && <div>{data.message}</div>} */}
        {/* <Todos todos={data}></Todos> */}
        <Todos basename={name} title={title} age={age} />
      </div>
    </>
  );
}

export default App;
