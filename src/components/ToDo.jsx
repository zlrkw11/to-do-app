import { useState } from "react";
export default function ToDo() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input type="text" value={todo} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
