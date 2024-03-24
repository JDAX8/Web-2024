import React, { useEffect, useState } from 'react'
import { useTasks } from '../../hooks/useTask'
import { AddTask } from '../AddTask/AddTask'
import { TaskList } from '../TaskList/TaskList'
import './Body.css'
import { DownBar } from '../DownBar/DownBar'
import { Filter } from '../Filter/Filter'

function Body () {
  const { tasks, createTask, completeTask, deleteTask, completeAllTasks, deleteAllTasks } = useTasks()
  const [filterOption, setFilterOption] = useState('All')
  const [actualTasks, setActualTasks] = useState(tasks)

  const handleFilterChange = (option) => {
    setFilterOption(option)
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    switch (filterOption) {
      case 'All':
        setActualTasks(tasks)
        break
      case 'Completed':
        setActualTasks(tasks.filter(task => task.completed))
        break
      case 'Pending':
        setActualTasks(tasks.filter(task => !task.completed))
        break
      default:
        setActualTasks(tasks)
        break
    }
  }, [tasks, filterOption])

  const handleCheckChange = (taskId) => {
    completeTask(taskId)
  }

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
  }

  return (
    <>
      <div className='body'>
        <div>
          <h1>Task Manager</h1>
          <p className='bywho'>By: Isaac Calle & JuanD Valencia</p>
          <AddTask onAddTask={createTask} />
          <Filter onSelectOption={handleFilterChange} /> {/* Pasar la función de manejo del cambio de opción */}
          {actualTasks.length > 0
            ? (
              <TaskList
                tasks={actualTasks}
                onCheckChange={handleCheckChange}
                onDeleteTask={handleDeleteTask}
              />
              )
            : (
              <>
                <img src='https://media3.giphy.com/media/fX2tHgGgfzMOD12DRo/giphy.gif' />
              </>
              )}
        </div>
        <div>
          {tasks.length > 0 && <DownBar tasks={tasks} onCompleteTasks={completeAllTasks} onClearAll={deleteAllTasks} />}
        </div>
      </div>
    </>
  )
}

export default Body
