import { useState } from "react";
export default function ToDo() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
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
