import { useEffect } from 'react'
import { useTask } from '../../hooks/useTask';
import './Body.css'
import { AddTask } from "../AddTask/AddTask"
// import { CheckBox } from '../checkbox/checkbox'
// import { TaskContainer } from '../Task/Task'
import { TaskList } from '../TaskList/TaskList';

function Body() {
  const {
    tasks,
    handleTasks,
  } = useTask()

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
      <AddTask onAddTask={handleTasks} />
      {/* Otro componente que necesita conocer las tareas */}
      {
        tasks.length > 0
        ? (<TaskList tasks={tasks}/>)
        : (<p>AÑADI PUES OME</p>)
      }
    </div>

    <div>
      {/* <TaskContainer /> */}
    </div>
    </div>
    </>
  )
}

export default Body
