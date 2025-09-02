import React, { useState } from "react";
import "./home.css";

const Home = () => {

	const [name, setname] = useState("");
	const [course, setcourse] = useState("");
	const [gmail, setgmail] = useState("");
	const [mobile, setmobile] = useState("");


	let arr = JSON.parse( localStorage.getItem("student_arr")) || [];

	const fill_arr = (e) => {
		e.preventDefault();
		let info = {
			key:Math.floor(Math.random() * 1000),
			name,
			course,
			gmail,
			mobile,
		}; 
		
		arr.push(info)
		 localStorage.setItem("student_arr", JSON.stringify(arr));
       alert("data submited")
	   
	};
	return (
		<div>
			<form onSubmit={fill_arr} action="">
				<label>Student Name</label>
				<input
					onChange={(el) => setname(el.target.value)}
					type="text"
					placeholder="Enter Your Name"
				/>
				<br />
				<br />
				<label>Select Your Course</label>
				<select
					onChange={(el) => setcourse(el.target.value)}
					name=""
					id="select"
				>
					<option value=" ">Choose your course</option>
					<option value="Blockchain">Blockchain</option>
					<option value="UI_UX">UI UX</option>
					<option value="Fullstack">Fullstack</option>
					<option value="Graphic_design">Graphic Design</option>
				</select>
				<br />
				<br />
				<label>Enter your G-mail</label>
				<input
					onChange={(el) => setgmail(el.target.value)}
					type="text"
					placeholder="Enter your G-mail.."
				/>
				<br />
				<br />
				<label>Enter your mobile no.</label>
				<input
					onChange={(el) => setmobile(el.target.value)}
					type="Number"
					placeholder="Enter mobile no.."
				/>
				<br />
				<br />
				<input id="submit" type="Submit" />
			</form>
		</div>
	);
};

export default Home;

