import React, { useState } from 'react'
// import "./styles.css"

const Accordion = ({ title, content}) => {
  const [isactive, setisactive] = useState(false)
  return (
    <section className='accordian-card' key={Math.random()}>
      <div className='header' onClick={()=>setisactive(!isactive)}>
        <div>{title}</div>
        <p className='icon'>{isactive ? '-' : '+'}</p>
      </div>
      <div className='content'>
        {isactive && <p className='card-info'>{content}</p>}
      </div>
    </section>
  )
}

export default Accordion