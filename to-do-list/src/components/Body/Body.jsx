// import { useState } from 'react'
import './Body.css'
import { AddTask } from "../AddTask/AddTask"
import { CheckBox } from '../checkbox/checkbox'
import { TaskContainer } from '../Task/Task'

function Body() {
  // const [tasks, setTasks] = useState([])

  return (
    <>
    <div className="body">
      <AddTask />
      <div>
      <CheckBox />
    </div>
    <div>
      <TaskContainer />
    </div>
    </div>
    
    </>
  )
}

export default Body
