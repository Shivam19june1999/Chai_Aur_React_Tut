import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = (useState(15)) // useState sends updates in batches

  // let counter =5

  //arrow function to add click and update value
  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1)
    // setCounter((prevCounter) => prevCounter + 1) // i
    // setCounter((prevCounter) => prevCounter + 1) //ii
    //  i or ii can be used irrespective of name
    // setCounter(prevCounter + 1)
    // setCounter(prevCounter + 1)
    // setCounter(prevCounter + 1)
    // setCounter(prevCounter + 1)
    // console.log("Clicked", counter)
  }
  //arrow function to add click and delete value
  const deleteValue = () => {
    // console.log("Clicked", counter)
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>
        Chai aur react
      </h1>

      <h2>
        Counter Value {counter}
      </h2>

      <button onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button onClick={deleteValue}>
        Delete value{counter}
      </button>
      <p>
        footer {counter}
      </p>
    </>
  )
}

export default App
