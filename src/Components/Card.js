import React, { useState } from 'react';
import poemdata from '../assests/Data.js';
import Innercard from './Innercard.js';

function Card() {
  const [poem, setPoem] = useState(poemdata);
    const myPOem=poem.map((item, index) => (
        <Innercard key={index} item={item} />
      ))

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {myPOem}
        </div>
      </div>
    </section>
  );
}

export default Card;
