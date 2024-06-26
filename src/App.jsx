import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'


import { Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route  path ="/" element={<Home />} />
        <Route  path ="/project" element={<Project />} />
        <Route  path ="/about" element={<About />} />
        <Route  path ="contact/" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
