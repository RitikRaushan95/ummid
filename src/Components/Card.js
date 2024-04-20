import React, { useEffect, useState } from 'react';
import poemdata from '../assests/Data.js';
import Poemcard from './Poemcard.js';

function Card() {

  const [poem,setPoem]=useState(poemdata);
  const myPoem=poem.map((el,index)=>{
              return <Poemcard key={index} item={el}/>
            })

  const filterPoem=()=>{
      const fltredPoem=poem.filter((el)=> el.rating>15)
      setPoem(fltredPoem)
  }
    
  return (
    <>
    <div className="flex flex-col md:flex-row flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-5 justify-center items-center">
        {myPoem}
    </div>
    </>
  );
}

export default Card;
