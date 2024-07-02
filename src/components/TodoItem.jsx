import styles from "./todolist.module.css";
function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{item}</div>
      <hr />
    </div>
  );
}

export default TodoItem;
