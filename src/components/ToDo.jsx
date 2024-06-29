import { useState } from "react";
import TodoItem from "./TodoItem";
export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    // prevent refreshing
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
