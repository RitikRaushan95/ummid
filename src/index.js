import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Stories from "./Components/Stories";

const Ummid=()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
}

const myRoute=createBrowserRouter([
    {
        path:'/',
        element:<Ummid/>,
        children:[
            {
                path:"/",
                element:<Card/>
            },
            {
                path:"/stories",
                element:<Stories/>
            }
        ],
    },
   
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={myRoute} />)
