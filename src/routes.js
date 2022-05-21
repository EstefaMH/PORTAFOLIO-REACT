import React  from "react";
import {BrowserRouter , Switch , Route , Link , Routes}from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutme";
import Jobs from "./pages/Jobs";
import Error404 from "./pages/Error404";
import Studies from "./pages/Studies";
import Skills from "./pages/Skills";


function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutme" element={<About />}></Route>
                <Route path="/jobs" element={<Jobs />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/studies" element={<Studies/>}></Route>
                <Route path="*" element={<Error404/>}></Route>
            </Routes>        
        </BrowserRouter>

    );

}

export default routes;