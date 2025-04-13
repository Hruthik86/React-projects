import React, { useState } from 'react'
import "../style.css";
import "./App.css"

const Counter = () => {
    const [count, setCount] = useState(0)
  return (

    <div className='container'>
        <div>
            <h1 className='number'>{count}</h1>
        </div>
        <div className="btns-container">
            <button onClick={()=>setCount(count+1)} className='increment'>Increment</button>
            <button onClick={()=>setCount(count-1)} className='decrement'>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
