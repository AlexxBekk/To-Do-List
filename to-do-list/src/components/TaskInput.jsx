import React, { useState } from "react";
import styles from "../styles/TaskInput.module.css";

function TaskInput({ onAdd }) {
  const [taskText, setTaskText] = useState("");
  const [taskId, setTaskId] = useState(1);

  function handleInputChange(event) {
    setTaskText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!taskText.trim()) return;
    onAdd({
      id: taskId,
      text: taskText,
      isCompleted: false,
    });

    setTaskText("");
    setTaskId(taskId + 1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.taskInput}
        type="text"
        placeholder="Введите текст..."
        value={taskText}
        onChange={handleInputChange}
      />
      <button className={`${styles.taskAdditionBtn} btn`} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default TaskInput;
