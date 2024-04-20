import React from 'react'

function Poemcard({item}) {
  return (
    <div className="m-5 md:w-1/5 sm:mb-0 mb-6 rounded-xl hover:border-white  shadow-lg hover:shadow-xl hover:shadow-purple-500/60
    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300 justify-center cursor-pointer relative p-2">
      <div className="rounded-lg h-20 md:h-40 overflow-hidden relative">
        <img alt="content" className="object-cover object-center h-full w-full" src={item.url} />
      </div>
      <h2 className="text-base font-bold title-font text-gray-900 mt-1">{item.poet}</h2>
      <p className="text-base leading-relaxed mt-2 overflow-hidden line-clamp-3" style={{ maxHeight: '100px', lineHeight: '1.5em', WebkitLineClamp: '3', display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
        {item.lines}
      </p>
      <a className="text-indigo-500 inline-flex items-center cursor-pointer">
        Read More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  )
}

export default Poemcard
