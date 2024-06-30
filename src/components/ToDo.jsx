import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      {/* Form component runs and provides a todo list */}
      <Form todos={todos} setTodos={setTodos} />
      {/* TodoList component renders the list */}
      <TodoList todos={todos} />
    </div>
  );
}
