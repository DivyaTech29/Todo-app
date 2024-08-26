import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.task}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
