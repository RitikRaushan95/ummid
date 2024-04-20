import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Changed import statement
import Stories from "./Components/Stories";

const Ummid = () => {
    return (
        <>
            <Navbar />
            <Card />
            <Footer />
        </>
    )
}

ReactDOM.render(
    <Router>
        <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={<Ummid />} />
            <Route path="/story" element={<Stories />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
