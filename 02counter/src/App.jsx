import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,setCounter] = useState(15); // 15 is the default value of the counter and counter is the vaiable name of 15 and setCounter is the method , now since we used useState counter ++ and counter --  will not work

 // let counter = 5;

  const addValue = () => {
      console.log("Clicked : ", counter);
      //counter++;
      if(counter >= 19)
        setCounter(counter =20)
      else
      setCounter(counter = counter +1)
  }

  const removeValue = () => {
      console.log("Clicked : ", counter);
      //counter--;
      if(counter <=1)
        setCounter(counter =0)
      else
      setCounter(counter = counter -1)

  }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter value : {counter} </h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App

// //if we implement setCounter say 5 times
// setCounter(counter +1)
// setCounter(counter +1)
// setCounter(counter +1)
// setCounter(counter +1)
// setCounter(counter +1)

// it will take the coounter value as 16 all 5 times ana the result will be 16 however if we want to increment 5 times we can implement using the callback fxn

// setCounter((counter) => counter +1)
// or
// setCounter(counter => counter+1)
// setCounter(counter => counter+1)
// setCounter(counter => counter+1)
// setCounter(counter => counter+1)
// setCounter(counter => counter+1)