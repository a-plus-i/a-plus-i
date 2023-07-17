import { useState } from 'react'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  const onClick = () => {

  }



  return (
    <>
      <ul className="nav">
        <li><a href="/">Home</a></li>
      </ul>
      <div className="main-page">
        <h1>A+I</h1>
        <h3 className="black-text">Generate quality practice content for</h3>
        <h3><span> </span></h3>
        <div className="paragraph">
          <pre className="small-text">
            A+I is an AI powered tool that generates effective practice
          </pre>
          <pre className="small-text">
            problems, removing financial barriers to achieving your dreams
          </pre>
        </div>
        <Button
          onClick={() => {
            axios.get("")

          }}
        >
        </Button>
      </div>

    </>
  )
}
export default App