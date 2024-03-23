import './TaskList.css';
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';

export function TaskList({ tasks, onDeleteTask }) {
  const [taskStates, setTaskStates] = useState(tasks.map(() => false));

  useEffect(() => {
    setTaskStates(tasks.map(() => false));
  }, [tasks]);

  const handleCheckboxChange = (index) => {
    setTaskStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  return (
    <div>
      <h3>Tasks:</h3>
      <div className="task-container">
        <ul>
          {tasks.map((task, index) => (
            <li key={task.id} className="task-main-container">
              <div className="checkbox-title">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={taskStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span
                  className="task-list"
                  style={{
                    textDecoration: taskStates[index] ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </span>
              </div>
              <Button
                title="delete"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
