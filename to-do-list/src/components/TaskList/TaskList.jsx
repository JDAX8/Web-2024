import './TaskList.css'
import { Button } from '../Button/Button'

export function TaskList ({ tasks, onCheckChange, onDeleteTask }) {
  const handleCheckboxChange = (taskId) => {
    onCheckChange(taskId)
  }

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId)
  }

  return (
    <div>
      <h3 className='tete'>Tasks:</h3>
      <div className='task-container'>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className='task-main-container'>
              <div className='checkbox-title'>
                <input
                  className='checkbox'
                  type='checkbox'
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <span
                  className='task-list'
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none'
                  }}
                >
                  {task.title}
                </span>
              </div>
              <Button
                title='Delete'
                onClick={() => handleDeleteTask(task.id)}
              />

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
