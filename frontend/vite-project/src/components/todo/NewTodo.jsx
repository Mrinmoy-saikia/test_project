import { useState } from "react";

const NewTodo = () => {
  const [curr, setCurr] = useState(0);
  const handleCurr = (param) => {
    setCurr(param);
  };
  return (
    <div id="NewTodo">
      <button onClick={() => handleCurr(curr + 1)}>Curr</button>
      <div>{curr}</div>
    </div>
  );
};

export default NewTodo;
