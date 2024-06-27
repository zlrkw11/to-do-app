export default function ToDo() {
  const [todo, setTodo] = useState();
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
