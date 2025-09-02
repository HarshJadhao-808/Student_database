import React from "react";
import {BrowserRouter as Router , Routes , Route , Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Database from "./Pages/database.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Demo from "./Pages/Demo.jsx";
import Ragister from "./Pages/Ragister.jsx";
import Inquiry from "./Pages/Inquiry.jsx";


const Allroutes = () => (
	<Router>
        <Navbar/>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/database" element={<Database/>} />
			<Route path="/demo" element={<Demo/>} />
			<Route path="/ragister" element={<Ragister/> } />
			<Route path="/inquiry" element={<Inquiry/>} />
		</Routes>
	</Router>
);
export default Allroutes