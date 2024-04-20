import React from 'react'
import Story from '../assests/Storydata'
import Stories from './Stories'
function Storycard() {
    const allstory=Story.map((el)=> <Stories details={el}/>)
  return (
    <div className='flex flex-col md:flex-row flex-wrap sm:m-10 mt-4 justify-center items-center'>
    {allstory}
  </div>
  
  )
}

export default Storycard
