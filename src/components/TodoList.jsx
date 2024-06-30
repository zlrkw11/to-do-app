import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
