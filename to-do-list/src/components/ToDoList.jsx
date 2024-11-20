import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import TaskInput from "./TaskInput";
import "../styles/Globals.css";

function ToDoList() {
  const [tasksList, setTasksList] = useState([]);

  const noTasks = tasksList.length === 0;
  const allTasksCompleted = !noTasks && tasksList.every((task) => task.isCompleted)

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
      {noTasks
        ? null
        : tasksList.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onToggle={toggleTaskStatus}
            onDelete={deleteTask}
          />
        ))}

      {noTasks ? <h2>Задач нет</h2> : allTasksCompleted && <h2 className="allDone">Все задачи выполнены! \ ^О^ /</h2>}
    </div>
  );
}

export default ToDoList;
