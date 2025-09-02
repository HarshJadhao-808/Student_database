import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Allroutes from "../Allroutes";
import "./home.css";
const Navbar = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<img
								src="	https://www.skillonit.com/static/media/Skilonit_new_logo.a161fa932b5d02e8a3d4d06f1b7bef3f.svg"
								alt=""
							/>
						</Link>
					</li>
					<li>
						<Link to="/database">student_database</Link>
						<Link to="/ragister">Ragister</Link>
						<Link to="/demo">Demo</Link>
						<Link to="/inquiry">Inquiry</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
