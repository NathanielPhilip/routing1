import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbars from "./components/Navbars";
import ServiceDetails from "./components/ServiceDetails";

function Router(){
    return(
        <BrowserRouter>
        <Navbars />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/ServiceDetails" element={<ServiceDetails/>}/>
        </Routes>
        </BrowserRouter>
    );
}




export default Router;