import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/todo/Todos";
// import { Todos } from "./components/todo/Todos";

function App() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);

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
        <Todos basename={name} users={users} title={title} age={age} />
        {/* ? means users && users.map */}
        {/* {users?.map((user) => {
          return (
            <div key={user.id}>
              <div>id: {user.id}</div>
              <div>name: {user.name}</div>
              <div>username: {user.username}</div>
            </div>
          );
        })} */}
        {/* {JSON.stringify(users, null, 2)} */}
      </div>
    </>
  );
}

export default App;
