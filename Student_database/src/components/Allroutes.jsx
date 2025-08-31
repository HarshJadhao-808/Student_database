import React from "react";
import {BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Home from "./Pages/Home";
import Database from "./Pages/Database.jsx";

const Allroutes = () => (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/database" element={<Database/>} />
    </Routes>
)

export default Allroutes