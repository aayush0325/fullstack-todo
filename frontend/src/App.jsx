import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodos'
import { RenderTodos } from './components/RenderTodos'

function App() {
  const [todos,setTodos] = useState([])
  
  
  fetch('http://localhost:3000/todos').then(
    async function(res){
      const jsonx = await res.json();
      setTodos(jsonx.todos)
    }
  )
  return ( 
    <>
      <CreateTodo></CreateTodo>
      <RenderTodos todos={todos}> </RenderTodos>
    </>
  )
}
 
export default App
