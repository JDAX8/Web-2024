import { useState } from 'react'
import { TasksContextProvider } from './context/TasksContextProvider'
import Body from './components/Body/Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TasksContextProvider>
     <Body />
     </TasksContextProvider>
    </>
  )
}

export default App
