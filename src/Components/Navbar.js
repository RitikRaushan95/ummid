import React, { useState } from 'react';
import logo from '../assests/Ummid.png';
import logoname from '../assests/Ummid logo name.png';
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto flex flex-wrap flex-col mt-3 md:flex-row items-center justify-between  ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" className="w-24 h-14 mr-5" />
          <img src={logoname} alt="" className="w-36 h-14" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center">
    <Link to="./" className="mr-5 text-black no-underline border-b-2 border-transparent hover:border-purple-500 hover:text-gray-900">Home</Link>
    <Link to="/stories" className="mr-5 text-black no-underline border-b-2 border-transparent hover:border-purple-500 hover:text-gray-900">Stories</Link>
    <Link to="/write" className="mr-5 text-black no-underline border-b-2 border-transparent hover:border-purple-500 hover:text-gray-900">Write</Link>
    <Link to="/feedback" className="mr-5 text-black no-underline border-b-2 border-transparent hover:border-purple-500 hover:text-gray-900">Feedback</Link>
</nav>

        <div className="flex flex-col md:flex-row justify-center items-center ">
          <input type='text' className='border-2 mr-5 w-auto md:w-60 border-slate-500 hover:border-purple-900 p-2 rounded-md' placeholder='Search for poem' value={search}  onChange={assignSearch}/>
          <button className="inline-flex  font-medium items-center bg-purple-500 hover:bg-purple-900 hover:text-white border-0 py-1 px-3 focus:outline-none rounded text-base  md:mt-0 text-black h-10 justify-center" onClick={fetchValue}>Search
          </button>
        </div>
      </div>
    </header>
    <hr className="mx-auto border-solid border-b-1 border-slate-500 w-11/12" />
    
    </>
  );
}


export default Navbar;
