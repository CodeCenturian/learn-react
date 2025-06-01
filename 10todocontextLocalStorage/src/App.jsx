import { useState } from 'react'
import React from 'react'
import { ToDoProvider } from './contexts/ToDoContext'


import './App.css'
import TodoForm from './components/ToDoForm'
import { ToDoItem } from './components'

function App() {

  // context apis
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [{id : Date.now(), ...todo}, ...prev]);
  }

  const updateToDo = (todo, id) => {
    setToDos(prev => prev.map((item) => (item.id === id ? todo : item)));
  }

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  }

  const toggleComplete = (id) => {
    setToDos((prev) => prev.map((item) => item.id === id ? {...item, completed : !item.completed} : item));
  }


  //local Storage

  // Load/Get todos from localStorage on initial render
  React.useEffect(  () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) ; // "todos" is the key
    if (storedTodos && storedTodos.length > 0) {
      setToDos(storedTodos);
    }
  },[] )

  // Save todos to localStorage whenever todos change
  React.useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])

  return (
    <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className ="w-full">
                            <ToDoItem todo={todo}/>
                          </div>

                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
