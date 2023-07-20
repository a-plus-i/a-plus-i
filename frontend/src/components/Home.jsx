import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';


function Home(props) {
    const setPage = props.setPage;

    console.log(typeof setPage)

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
        <Button onClick={() => setPage("generate")}>Start practicing →</Button>

      </div>

    </>
  )
}

export default Home;