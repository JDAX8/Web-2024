import { useState } from 'react'
import './Body.css'
import { AddTask } from "../AddTask/AddTask"
import { CheckBox } from '../checkbox/checkbox'
import { TaskContainer } from '../Task/Task'
import { TaskList } from '../TaskList/TaskList';

function Body() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Agrega la nueva tarea al estado de tareas
  };

  return (
    <>
    <div className="body">
    <div>
      <h2>Task Manager</h2>
      <AddTask onAddTask={addTask} />
      {/* Otro componente que necesita conocer las tareas */}
      <TaskList tasks={tasks} />
    </div>

    <div>
      <TaskContainer />
    </div>
    </div>
    </>
  )
}

export default Body
