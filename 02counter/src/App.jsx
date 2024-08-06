import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const addCount = () => {
    if(count < 20){
      count = count + 1
      setCount(count)
    }
  }

  const removeCount = () => {
    if(count == 0){
      count = 0
    }else{
      count = count - 1
      setCount(count)
    }
  }
  return (
    <>
      <h1>Prathamesh Count: {count}</h1>
      <h1>Shakti Count: {count}</h1>
      <button onClick={addCount}>Add Count: {count}</button>
      <button onClick={removeCount}>Remove Count: {count}</button>
    </>
  )
}

export default App
