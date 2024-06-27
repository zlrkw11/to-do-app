import { useState } from "react";
export default function ToDo() {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    // prevent refreshing
    e.preventDefault();
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
