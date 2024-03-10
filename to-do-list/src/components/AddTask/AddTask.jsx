import './AddTask.css'
import { useState } from 'react';

export function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task); // Llama a la función del padre para agregar la tarea
      setTask(''); // Reinicia el estado del input
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
