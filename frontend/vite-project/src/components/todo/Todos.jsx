// export function Random({ todos }) {
//   return (
//     <div>
//       <h1>{todos.title}</h1>
//       <h1>{todos.description}</h1>
//       <button>Submit</button>
//     </div>
//   );
// }

import NewTodo from "./NewTodo";
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
  return (
    <div>
      hello world {basename} {title}
      <UpdateTodo age={age} />
      <NewTodo />
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
