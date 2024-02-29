import { useState } from 'react'
import './Body.css'
import { AddTask } from "../AddTask/AddTask"

function Body() {
  const [tasks, setTasks] = useState([])

  return (
    <>
    <div className="body">
      <AddTask />
    </div>
    </>
  )
}

export default Body
