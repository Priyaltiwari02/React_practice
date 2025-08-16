import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(12)

  //let counter = 12

  const addValue = () =>{
    //console.log("clicked" , counter);
    //counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }


  return (
   <>
    <h1>CHAI AUR REACT</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    
    onClick={addValue}
    
    >Add value</button>

    <br  />

    <button

    onClick={removeValue}
    
    
    >remove value</button>
   </>
  )
}

export default App
