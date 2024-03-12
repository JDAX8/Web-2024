import { useState } from 'react';
import './TaskList.css'

export function TaskList({ tasks }) {
  return (
    <div>
      <h3>Tasks:</h3>
      <div className='task-container'>
      <ul> 
        {tasks.map((task, index) => (
          <div className='task-main-container'>
              <input className="checkbox" type="checkbox"/>
              <li key={index}>{task}</li>
              <button className='delete-button'>Delete</button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}