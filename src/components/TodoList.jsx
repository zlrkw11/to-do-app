import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styles from "./todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other required properties here
    })
  ).isRequired,
  id: PropTypes.number.isRequired,
};
