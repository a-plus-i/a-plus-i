import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul className="nav">
        <li><a href="/">Home</a></li>
      </ul>
      <div className="main-page">
        <h1>A+I,</h1>
        <h3 className="black-text">Instantly generate practice problems for</h3>
        <h3><span> </span></h3>
        <div className="paragraph">
          <pre className="small-text">
            A+I is an AI powered tool that generates effective practice
          </pre>
          <pre className="small-text">
            problems in a matter of seconds
          </pre>
        </div>
        <button type="button">Start Learning!</button>
      </div>
    </>
  )
}

export default App
