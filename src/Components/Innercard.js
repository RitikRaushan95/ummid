import React, { useState, useEffect } from 'react';

function Innercard({item}) {
  
  const readMore = () => {
    const premover = document.querySelector('.line-clamp-3');
    premover.classList.remove('line-clamp-3');
  };


  return (
    <div className="p-5 m-5 md:w-1/4 sm:mb-0 mb-6 border-2 border-grey rounded-xl hover:border-white  hover:shadow-lg hover:shadow-purple-500/60
    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 justify-center cursor-pointer" >
      <div className="rounded-lg h-24 md:h-30 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={item.url} />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.poet}</h2>
      <p className="text-base leading-relaxed mt-2 overflow-hidden line-clamp-3" style={{ maxHeight: '100px', lineHeight: '1.5em', WebkitLineClamp: '3', display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
        {item.lines}
      </p>
      <a className="text-indigo-500 inline-flex items-center cursor-pointer"
        onClick={readMore}
      >
        Read More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default Innercard;
