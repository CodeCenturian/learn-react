import { useState , useEffect } from 'react'
import { ThemeProvider } from './context/theme';
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  //actual change in theme

  useEffect(()=>{
    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  // we use document.documentElement.classList to change the class of the html where classList gives us the list of classes

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>

  )
}

export default App
