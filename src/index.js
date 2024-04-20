import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Stories from "./Components/Stories";

import Write from "./Components/Write";
import Feedback from "./Components/Feedback";
import Storycard from "./Components/Storycard";

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
                element:<Storycard/>
            },
            {
                path:"/write",
                element:<Write/>
            },
            {
                path:"/feedback",
                element:<Feedback/>
            }
        ],
    },
   
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={myRoute} />)
