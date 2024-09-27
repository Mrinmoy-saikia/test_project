// export function Random({ todos }) {
//   return (
//     <div>
//       <h1>{todos.title}</h1>
//       <h1>{todos.description}</h1>
//       <button>Submit</button>
//     </div>
//   );
// }

import { useState } from "react";
import Tododiv from "./NewTodo";
import UpdateTodo from "./UpdateTodo";
import PropTypes from "prop-types";
// const Todos = (props) => {
//   console.log("props", props);

//   return (
//     <div>
//       hello world {props.name} {props.title} {props.age}
//     </div>
//   );
// };

const Todos = ({ basename, title, age, users }) => {
  const [idCount, setIdCount] = useState(1);
  const handleClick = (param) => {
    setIdCount(param);
  };
  return (
    <div>
      hello world {basename} {title}
      <UpdateTodo age={age} />
      <button onClick={() => handleClick(1)}>1 </button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button>
      <Tododiv id={idCount} />
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

Todos.propTypes = {
  basename: PropTypes.string,
  title: PropTypes.string,
  age: PropTypes.number,
};

export default Todos;
