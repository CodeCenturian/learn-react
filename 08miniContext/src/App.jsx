import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className="bg-blue-400 rounded-xl p-4">Mini Context API Example</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
