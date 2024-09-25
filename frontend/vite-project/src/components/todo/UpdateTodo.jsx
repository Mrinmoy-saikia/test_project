import React, { useState } from "react";

const UpdateTodo = ({ age }) => {
  const [count, setCount] = useState(0);
  // const incrementCounter = () => {
  //   // count++;
  //   setCount(count + 1);
  // };
  // const decrementCounter = () => {
  //   // count++;
  //   setCount(count - 1);
  // };
  const handleCounter = (param) => {
    // const val = param ? count + 1 : count - 1;
    setCount(param);
  };
  console.log(count);
  return (
    <div id="updateTodo">
      {/* updateTodo age {age} */}
      <button onClick={() => handleCounter(count - 1)}>-</button>
      <div> {count} </div>
      <button onClick={() => handleCounter(count + 1)}>+</button>
    </div>
  );
};

export default UpdateTodo;
