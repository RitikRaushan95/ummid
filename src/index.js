import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
      <Navbar/>
      <Card/>
      <Footer/>
    </>
   
)
