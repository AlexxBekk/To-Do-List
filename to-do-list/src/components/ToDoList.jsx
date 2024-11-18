import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import TaskInput from "./TaskInput";
import "../styles/Globals.css";

function ToDoList() {
  const [tasksList, setTasksList] = useState([]);

  function addTask(task) {
    setTasksList([...tasksList, task]);
  }

  function toggleTaskStatus(id) {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasksList(tasksList.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1>TO-DO</h1>
      <TaskInput onAdd={addTask} />
      {tasksList.length === 0
        ? null
        : tasksList.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onToggle={toggleTaskStatus}
            onDelete={deleteTask}
          />
        ))}
      {!tasksList.length && <h2>Задач нет</h2>}
      {tasksList.length !== 0 &&
        tasksList.every((task) => task.isCompleted) && (
          <h2 className="allDone">Все задачи выполнены! \ ^О^ /</h2>
        )}
    </div>
  );
}

export default ToDoList;
