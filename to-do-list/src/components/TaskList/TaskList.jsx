import './TaskList.css';
import { useState } from 'react';

export function TaskList({ tasks }) {
  const [taskStates, setTaskStates] = useState(tasks.map(() => false));

  const handleCheckboxChange = (index) => {
    setTaskStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div>
      <h3>Tasks:</h3>
      <div className="task-container">
        <ul>
          {tasks.map((task, index) => (
            <div key={index} className="task-main-container">
              <div className="checkbox-title">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={taskStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <li
                  className="task-list"
                  style={{
                    textDecoration: taskStates[index] ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </li>
              </div>
              <button className="delete-button">Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}