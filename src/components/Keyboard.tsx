import React from 'react'
import '../assets/style.css'

interface IKeyBoard {
  handleClick: (text: string) => void
}

function KeyBoard ({ handleClick }: IKeyBoard) {
  return (
    <div className='keyboard'>
        <div className="button delete" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>DEL</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>(</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>)</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>+</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>7</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>8</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>9</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>-</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>4</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>5</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>6</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>x</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>1</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>2</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>3</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>/</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>0</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>,</h2>
        </div>
        <div className="button" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>AC</h2>
        </div>
        <div className="button equal" onClick={e => handleClick(e.currentTarget.innerText)}>
            <h2>=</h2>
        </div>
    </div>
  )
}

export default KeyBoard
