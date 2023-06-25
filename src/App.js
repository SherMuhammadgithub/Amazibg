import React from "react";
import './App.css';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { DarkModeProvider } from './DarkModeContext';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
    return (
        <>
            <DarkModeProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact  path='/about' element={<About />} />
                        <Route exact  path='/contact' element={<Contact />} />
                        <Route exact  path='/services' element={<Service />} />
                        
                    </Routes>
                    <Footer/>
                 
                    
                </BrowserRouter>
             

            </DarkModeProvider>
       
        </>
    )


}
export default App;