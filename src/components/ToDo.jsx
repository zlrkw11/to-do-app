import { useState } from "react";
export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    // prevent refreshing
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
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
    </div>
  );
}
