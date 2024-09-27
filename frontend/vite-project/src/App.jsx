import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Todos from "./components/todo/Todos";
// import { Todos } from "./components/todo/Todos";

function App() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);
  // const [sum, setSum] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const fetchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    setUsers(res);
  };

  // (1) this useeffect will run once after page load
  useEffect(() => {
    fetchUserData();
  }, []); //[] is dependency

  // (2) this useeffect will run whenever data will change
  useEffect(() => {}, [data]); //[] is dependency

  // (3) this useeffect will run infinitly
  useEffect(() => {}); //[] is not used

  // const baseUrl = "http://localhost:3000";
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     description: "mrinmoy@gmail.com",
  //     title: "huholh",
  //   }),
  // };

  // const apiHandler = async () => {
  //   const response = await fetch("http://localhost:3000/todo");
  //   const res = await response.json();
  //   setData(res);
  // };

  //using memo
  const count = useMemo(() => {
    let total = 0;
    for (let i = 0; i <= inputValue; i++) {
      total = total + i;
    }
    return total;
  }, [inputValue]);

  //using useEffect
  // useEffect(() => {
  //   let total = 0;
  //   for (let i = 0; i < inputValue; i++) {
  //     total = total + i;
  //   }
  //   setSum(total);
  // }, [inputValue]);

  // console.log("sum", sum);
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

        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="any num"
        ></input>
        {/* <button onClick={() => sumupto(inputValue)}>find</button> */}
        <div>
          sum from 1 to {inputValue} is {count}
        </div>

        {/* ? means users && users.map */}
        {/* {todo?.map((tod) => {
          return (
            <div key={tod.id}>
              <div>id: {tod.userId}</div>
              <div>name: {tod.title}</div>
              <div>Completed: {tod.completed}</div>
            </div>
          );
        })} */}
        {/* {JSON.stringify(users, null, 2)} */}
      </div>
    </>
  );
}

export default App;
