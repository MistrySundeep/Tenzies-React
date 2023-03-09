import { useState } from 'react'
import Die from './components/Dice'
import './App.css'


export default function App() {
  const [count, setCount] = useState(0)

  function allNewDice(){
    let numArr = []
    for(let i = 0; i < 10; i++){
      numArr.push(Math.floor(Math.random() * 6) + 1)
    }
    return numArr
  }

  let numbers = allNewDice()
  console.log(numbers)

  const dieItem = numbers.map((num) => {
    return <Die 
    value={num}
    />
  })


  return (
    <main>
        <div onClick={allNewDice} className="dice-container">
            {dieItem}
        </div>
    </main>
  )
}
