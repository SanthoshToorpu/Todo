import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo'

function App() {

  const [todos, setTodos] = useState([]);

  fetch('http://localhost:3000/todos')
    .then(async (res) => {
      const resp = await res.json()
      setTodos(resp.todos)
    })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
