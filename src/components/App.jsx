import React from 'react'
import Accordion from './Accordion/Accordion'
import { accordionData } from './Accordion/content'
import HiddenSearchBar from './HiddenSearchbar/HiddenSearchBar'
import MemoryGame from './Memory Game/MemoryGame'



const App = () => {
  return (
    <div>
      {/* <div className='accordian'>
        {accordionData.map(({ title, content})=>(
          <Accordion title={title} content={content}/>
        ))} */}
        {/* <HiddenSearchBar/> */}
        <MemoryGame/> 
      </div>
    
  )
}

export default App