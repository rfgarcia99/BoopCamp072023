import React from 'react';
import './Task.css';

const Task = ({ text, color, completed, onToggleComplete, onDelete }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`} style={{ backgroundColor: color }}>
      <span className="task-text">{text}</span>
      <button onClick={onToggleComplete} className="complete-button">
        {completed ? 'Incompleta' : 'Completa'}
      </button>
      <button onClick={onDelete} className="delete-button">
        Borrar
      </button>
    </div>
  );
};

export default Task;
