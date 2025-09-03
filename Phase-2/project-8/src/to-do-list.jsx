import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h1>Project - 8</h1>
      <h2>To-Do List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button onClick={addTask} style={{ padding: "8px 12px", marginBottom: "10px" }}>
        Add Task
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            {t}
            <button onClick={() => deleteTask(index)} style={{ color: "red" }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
