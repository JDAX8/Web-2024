import { useEffect } from 'react'
import { useTasks } from '../../hooks/useTask';
import { AddTask } from "../AddTask/AddTask"
import { TaskList } from '../TaskList/TaskList';
// import { CheckBox } from '../checkbox/checkbox'
// import { TaskContainer } from '../Task/Task'

import './Body.css'
import { DownBar } from '../DownBar/DownBar';

function Body() {
  const { tasks, createTask, completeTask, deleteTask, deleteAllTasks } = useTasks();
  
  const handleCheckChange = (taskId) => {
    completeTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

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
              onCheckChange={handleCheckChange}
              onDeleteTask={handleDeleteTask}
            />
          ) : (
            <p>AÑADI PUES OME</p>
          )}
        </div>
        <div>
          {
            tasks.length > 0 && 
            <DownBar tasks={tasks} onCompleteTasks={deleteAllTasks}/>
          }
        </div>
      </div>
    </>
  );
}

export default Body
