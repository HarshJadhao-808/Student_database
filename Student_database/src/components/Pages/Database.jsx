import React, { useState, useEffect } from "react";
import "./database.css";
const Database = () => {
	const [arr, setArr] = useState([]);
	const [demo_students, setdemo_students] = useState(JSON.parse(localStorage.getItem("demo_students")) || []);
	const [register_students, setregister_students] = useState(JSON.parse(localStorage.getItem("register_students")) || []);
	const [inquiry_students, setinquiry_students] = useState(JSON.parse(localStorage.getItem("inquiry_students")) || []);

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("student_arr")) || [];
		setArr(data);
	}, []);

	const delete_fun = (key) => {
		let data = arr.filter((el) => el.key !== key);
		localStorage.setItem("student_arr", JSON.stringify(data));
		setArr(data);
	};
	const demo_fun = (el) => {
		// console.log(el);
		let key = el.key;
		let name = el.name;
		let course = el.course;
		let gmail = el.gmail;
		let mobile = el.mobile;
		let demo_obj = {
			key,
			name,
			course,
			gmail,
			mobile,
		};
		let updated = [...demo_students, demo_obj];
		setdemo_students(updated);
		localStorage.setItem("demo_students", JSON.stringify(updated));
	};

	const register_fun = (el) => {
		// console.log(el);
		let key = el.key;
		let name = el.name;
		let course = el.course;
		let gmail = el.gmail;
		let mobile = el.mobile;
		let register_obj = {
			key,
			name,
			course,
			gmail,
			mobile,
		};
		let updated = [...register_students, register_obj];
		setregister_students(updated);
		localStorage.setItem("register_students", JSON.stringify(updated));
		
		// console.log(demo_students);
	};
	const inquiry_fun = (el) => {
		let key = el.key;
		let name = el.name;
		let course = el.course;
		let gmail = el.gmail;
		let mobile = el.mobile;
		let inquiry_obj = {
			key,
			name,
			course,
			gmail,
			mobile,
		};
		let updated = [...inquiry_students, inquiry_obj];
		setinquiry_students(updated);
		localStorage.setItem("inquiry_students", JSON.stringify(updated));
		
	}
	console.log(arr);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Students Name</th>
						<th>Selected Course</th>
						<th>Student's Gmail</th>
						<th>Mobile no.</th>
					</tr>
				</thead>
				<tbody>
					{arr.map((el) => {
						return (
							<tr key={el.key}>
								<td>{el.name}</td>
								<td>{el.course}</td>
								<td>{el.gmail}</td>
								<td>{el.mobile}</td>
								<td id="delete_button" onClick={() => delete_fun(el.key)}>
									Delete
								</td>
								<td id="inquiry" onClick={()=>inquiry_fun(el)}>Inquiry</td>
								<td id="registration" onClick={() => register_fun(el)}>
									Registration
								</td>
								<td id="demo" onClick={() => demo_fun(el)}>
									Demo
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Database;
