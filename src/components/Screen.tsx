import React from 'react'
import '../assets/style.css'

interface ScreenType {
  text: string
}

function Screen ({ text }: ScreenType) {
  return (
    <div className='calculator-screen'>
        <h2 data-testid="calc-screen" className='screen-text'>
            {text}
        </h2>
    </div>
  )
}

export default Screen
