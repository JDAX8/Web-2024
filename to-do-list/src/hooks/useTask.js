import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export const useTasks = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('This Component should be within TasksContextProvider')
  }

  const { tasks, createTask, deleteTask, deleteAllTasks } = context

  return {
    tasks,
    createTask,
    deleteTask,
    deleteAllTasks
  }
}