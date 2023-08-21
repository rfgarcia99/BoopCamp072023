// TaskList.js
import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const colors = ['#FFD700', '#FF5733', '#8A2BE2', '#32CD32', '#6495ED'];

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        text: newTaskText,
        color: colors[Math.floor(Math.random() * colors.length)],
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    if (tasks[index].completed) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="task-list">
      <div className="add-task-form">
        <input
          type="text"
          placeholder="Ingrese nueva tarea"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask} className="add-button">
          Agregar Tarea
        </button>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          color={task.color}
          completed={task.completed}
          onToggleComplete={() => toggleComplete(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
