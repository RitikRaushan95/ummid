import React, { useState } from 'react';
import poemdata from '../assests/Data.js';
import Innercard from './Innercard.js';

function Card() {

  const [poem,setPoem]=useState(poemdata);
   
  const myPoem=poem.map((el,index)=>{
              return <Innercard key={index} item={el}/>
            })

  const filterPoem=()=>{
      const fltredPoem=poem.filter((el)=> el.rating>15)
      setPoem(fltredPoem);
  }
      
  return (
    <section className="text-gray-600 body-font justify-center">
      <button className='bg-sky-300 m-5 p-2' onClick={filterPoem}>Top Rated</button>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
        {myPoem.length==0?<h1>No result found</h1>:myPoem}
        </div>
      </div>
    </section>
  );
}

export default Card;
