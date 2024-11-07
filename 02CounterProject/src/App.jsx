import { useState } from 'react'
import './App.css'

function App() {
    let [counter, setCounter] = useState(27)

    const addValue = () => {
        if(counter >= 20){
            console.log(`Clicked | Counter can't be more than 20`)
            return
        }

        setCounter(counter + 1)
        console.log(`Clicked | Counter = ${counter}`)
    }
    
    
    const subtractOne = () => { 
        if(counter <= 0){
            console.log(`Clicked | Counter can't be less than or equal to 0`)
            return
        }
            
        setCounter(counter - 1)
        console.log(`Clicked | Counter = ${counter}`)
    }

  return (
    <>
        <h1>Chai Aur React</h1>
         
        <h2>Counter value is {counter}</h2>
        
        <button onClick={addValue}>+ 1</button>
        <br/><br/>
        <button onClick={subtractOne}>- 1</button>
    </>
  )
}

export default App
