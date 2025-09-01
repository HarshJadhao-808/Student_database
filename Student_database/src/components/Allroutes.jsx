import React from "react";
import {BrowserRouter as Router , Routes , Route , Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Database from "./Pages/database.jsx";
import Navbar from "./Pages/Navbar.jsx";


const Allroutes = () => (
	<Router>
        <Navbar/>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/database" element={<Database/>} />
		</Routes>
	</Router>
);
export default Allroutes