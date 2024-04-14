import React from 'react';

function Innercard({ item }) {
  const readMore = () => {
    const premover = document.querySelector('.line-clamp-4');
    premover.classList.remove('line-clamp-4');
  };

  const readLess = () => {
    const pTags = document.getElementsByTagName('p');
    for (let i = 0; i < pTags.length; i++) {
      pTags[i].classList.add('line-clamp-4');
    }
  };
  

  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 border-2 border-white rounded-xl hover:border-purple-500" style={{boxShadow: "rgba(13, 38, 76, 0.19) 0px 9px 20px"}}>
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={item.url} />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.poet}</h2>
      <p className="text-base leading-relaxed mt-2 overflow-hidden line-clamp-4">
        {item.lines}
      </p>
      <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer"
         onClick={readMore} onDoubleClick={readLess}
      >
        Read More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
    
  );
}

export default Innercard;
