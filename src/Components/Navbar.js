import React, { useState } from 'react';
import logo from '../assests/Ummid.png';
import logoname from '../assests/Ummid logo name.png';

function Navbar(props) {
  const [search, setSearch]=useState('');
  let assignSearch=(input)=>{
        setSearch(input.target.value)
  }
  let fetchValue=()=>{
    console.log(search)
  }
  return (
    <>
    <header className="text-gray-600 body-font cursor-pointer">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between  ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" className="w-24 h-14 mr-5" />
          <img src={logoname} alt="" className="w-36 h-14" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center">
      <a className="mr-5 hover:text-gray-900 hover:border-purple-500 border-white border-b-2 ">Home</a>
      <a className="mr-5 hover:text-gray-900 hover:border-purple-500 border-white border-b-2" href='Stories.js'>Stories</a>
      <a className="mr-5 hover:text-gray-900 hover:border-purple-500 border-white border-b-2">Write</a>
      <a className="mr-5 hover:text-gray-900 hover:border-purple-500 border-white border-b-2">Feedback</a>
    </nav>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <input type='text' className='border-2 mr-5 w-60 border-slate-500 hover:border-purple-900 p-2 rounded-md' placeholder='Search for poem' value={search}  onChange={assignSearch}/>
          <button className="inline-flex  font-medium items-center bg-purple-500 hover:bg-purple-900 hover:text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-black h-10 justify-center" onClick={fetchValue}>Search
          </button>
        </div>
      </div>
    </header>
    <hr className="mx-auto border-solid border-b-1 border-slate-500 w-11/12" />
    
    </>
  );
}

export default Navbar;
