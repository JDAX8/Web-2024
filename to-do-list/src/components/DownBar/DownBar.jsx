import './DownBar.css'
import { useState, useEffect } from 'react'
import { Button } from '../Button/Button'

export function DownBar ({ tasks, onCompleteTasks, onClearAll }) {
  const [completedTasks, setCompletedTasks] = useState('0 out of 0')

  useEffect(() => {
    if (tasks) {
      const completedTasksCount = tasks.filter(task => task.completed).length
      setCompletedTasks(`${completedTasksCount} out of ${tasks.length} completed`)
    }
  }, [tasks])

  return (
    <div>
      <p className='textt'>{completedTasks}</p>
      <div>
        <Button title='Complete Tasks' onClick={() => onCompleteTasks()} />
        <Button title='Clear All' onClick={() => onClearAll()} />
      </div>

    </div>
  )
}
