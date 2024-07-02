import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    // prevent refreshing
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        placeholder="enter to do item"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

Form.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
