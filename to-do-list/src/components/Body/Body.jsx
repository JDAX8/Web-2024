import { useEffect } from 'react'
import { useTasks } from '../../hooks/useTask';
import { AddTask } from "../AddTask/AddTask"
import { TaskList } from '../TaskList/TaskList';
// import { CheckBox } from '../checkbox/checkbox'
// import { TaskContainer } from '../Task/Task'

import './Body.css'

function Body() {
  const { tasks, createTask, deleteTask, deleteAllTasks } = useTasks();

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  // const addTask = (newTask) => {
  //   const updatedTasks = [...tasks, newTask];
  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  //   setTasks(updatedTasks);
  // };

  return (
    <>
      <div className="body">
        <div>
          <h2>Task Manager</h2>
          <AddTask onAddTask={createTask} />
          {/* Otro componente que necesita conocer las tareas */}
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onDeleteTask={deleteTask}
              onDeleteAllTasks={deleteAllTasks}
            />
          ) : (
            <p>AÑADI PUES OME</p>
          )}
        </div>
        <div>
          {/* <TaskContainer /> */}
        </div>
      </div>
    </>
  );
}

export default Body
