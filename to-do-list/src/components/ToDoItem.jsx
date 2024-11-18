import React from "react";
import styles from "../styles/ToDoItem.module.css";

function ToDoItem({ task, onToggle, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />
        <span className={`${task.isCompleted && styles.isDoneTask}`}>
          {task.text}
        </span>
      </div>
      <button
        className={`${styles.taskDeleteBtn} btn`}
        onClick={() => onDelete(task.id)}
      >
        Удалить
      </button>
    </div>
  );
}

export default ToDoItem;
