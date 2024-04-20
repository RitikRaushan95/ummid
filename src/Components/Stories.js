import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function Stories({details}) {


  return (
    <div class="relative flex flex-wrap flex-col md:flex-row  mx-auto mt-10 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300">
      <div className='m-5'>
        <a href={details.story} target='new'><img class="h-30 w-20 md:h-60 md:w-40 object-cover rounded-md" src={details.url} alt="Random image"/></a>
        </div>
    </div>
  )
}

export default Stories
