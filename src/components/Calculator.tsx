import React, { useState } from 'react'
import '../assets/style.css'
import Screen from './Screen'
import KeyBoard from './Keyboard'

function Calculator () {
  const [equation, setEquation] = useState<string>('')

  function solveEquation (equation: string) {
    /* we can use eval, altough insecure, or a math library or do it ourselfs */
    // eslint-disable-next-line no-eval
    return String(eval(equation))
  }

  function handleClick (text: string) {
    if (equation === 'ERROR') {
      setEquation('')
    }

    if (text === '=') {
      try {
        if (equation.length > 0) {
          const result = solveEquation(equation)
          setEquation(result)
        }
      } catch (e) {
        setEquation('ERROR')
      }
    } else if (text === 'DEL') {
      setEquation(currValue => String(currValue).slice(0, -1))
    } else if (text === 'AC') {
      setEquation('')
    } else if (text === ',') {
      setEquation(currValue => currValue + '.')
    } else if (text === 'x') {
      setEquation(currValue => currValue + '*')
    } else {
      setEquation(currValue => currValue + text)
    }
  }

  return (
    <div className='calculator'>
        <Screen text={equation}/>
        <KeyBoard handleClick={handleClick}/>
    </div>
  )
}

export default Calculator
