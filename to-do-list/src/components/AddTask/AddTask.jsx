import { Button } from '../Button/Button'
import './AddTask.css'
import { useState } from 'react'

export function AddTask ({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleInputChange = (event) => {
    setTask(event.target.value)
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: crypto.randomUUID(), title: task, completed: false } // Crea la nueva tarea usando la función recibida
      onAddTask(newTask)
      setTask('') // Reinicia el estado del input
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className='add-task-container'>
      <div class='inputBox'>
        <input
          required=''
          type='text'
          value={task}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder='Enter a new task'
          className='add-task_input'
        />
      </div>
      <Button title='Add Task' onClick={handleAddTask} />
    </div>
  )
}
