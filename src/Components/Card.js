import React, { useState } from 'react';
import poemdata from '../assests/Data.js';
import Innercard from './Innercard.js';

function Card() {
  const [poem, setPoem] = useState(poemdata);
    const myPOem=poem.map((item, index) => (
        <Innercard key={index} item={item} />
      ))
 

      let filterCard = () => {
        const filteredPoems = poem.filter((el) => el.rating >= 5);
        setPoem(filteredPoems);
      }


      
  return (
    <section className="text-gray-600 body-font justify-center">
      <button className='bg-sky-300 m-5 p-2' onClick={filterCard}>Top Rated</button>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
        {myPOem}
        </div>
      </div>
    </section>
  );
}

export default Card;
