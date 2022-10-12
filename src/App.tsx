import React from 'react'
import Calculator from './components/Calculator'
import './fonts.css'

function App () {
  return (
    <div className="container">
      <h1 className="title">
        <span className="react-title">React</span> Calculator
      </h1>
      <Calculator />
    </div>
  )
}

export default App
