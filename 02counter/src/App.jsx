import { useState } from 'react'
import './App.css'

function App() {

  let initialinitialCounter = 0;
  const [counter,setCounter] = useState(initialinitialCounter)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
    console.log(counter);
  }
  return (
    <>
      <h1>Rohan Dhara Counter {counter}</h1>
      <div>
        <div className='buttons-container'><button onClick={increment}>+</button></div>
        <div className='buttons-container'><h3>{counter}</h3></div>
        <div className='buttons-container'><button onClick={decrement}>-</button></div>
      </div>
      <div>
        <p style={{fontSize:"33px"}}>Counter value is {counter}</p>
      </div>
    </>
  )
}

export default App
