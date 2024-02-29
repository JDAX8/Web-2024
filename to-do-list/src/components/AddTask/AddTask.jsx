import { useState } from 'react'
import './AddTask.css'

export function AddTask() {
  const [count, setCount] = useState([])

  return (
    <>
    <div>
        <input/>
        <button>Add Task</button>
    </div>
    </>
  )
}
