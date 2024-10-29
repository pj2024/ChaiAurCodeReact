import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addNum = () =>{
    console.log("clicked :" ,counter);
    if(counter <= 19){
      setCounter(counter + 1);
    }else{
      setCounter(20);
    }
  }

  const subNum = () =>{
    console.log("clicked : ", counter);
    if (counter == 0){
      setCounter(0);
    }else{
      setCounter(counter - 1);
    }    
  }
  return (
    <>
      <h2>Chai aur code</h2>
      <h2>counter : {counter}</h2>
      <button onClick={addNum}>Add value : {counter}</button>
      &nbsp;&nbsp;
      <button onClick={subNum}>Sub value : {counter}</button>
    </>
  )
}

export default App
