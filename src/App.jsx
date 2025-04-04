import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {add,mult,subs,dividedByTwoNumbers as divided} from './utils/fnc'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sum = add(5,6)
  const substract = subs(25,15)
  const multiplyer = mult(10,20)
  const divide = divided(25,5)
  console.log(divide);
  console.log(multiplyer);
  console.log(substract);
  console.log(sum); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more okay
      </p>
    </>
  )
}

export default App
