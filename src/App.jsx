import React from 'react'
import Accordion from './components/Accordion/Accordion'
import { accordionData } from './components/Accordion/content'



const App = () => {
  return (
    <div>
      <div className='accordian'>
        {accordionData.map(({ title, content})=>(
          <Accordion title={title} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default App