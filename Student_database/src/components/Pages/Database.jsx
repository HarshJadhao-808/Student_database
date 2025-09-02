import React, { useState, useEffect } from "react";
import "./database.css";
const Database = () => {
	const [arr, setArr] = useState([]);
	const [demo_students, setdemo_students] = useState([]);

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
		console.log(el);
		let key =el.key
		let name =el.name
		let course =el.course
		let gmail =el.gmail
		let mobile =el.mobile
		let demo_obj= {
			key,
			name,
			course,
			gmail,
			mobile
		}
		let updated=[...demo_students,demo_obj]
		setdemo_students(updated);
		localStorage.setItem("demo_students",JSON.stringify(updated))

		console.log(demo_students);
		
	};

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
								<td id="inquiry">Inquiry</td>
								<td id="registration">Registration</td>
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
