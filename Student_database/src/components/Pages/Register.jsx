import React, { useState } from 'react'

const Register = () => {
	const[arr,setarr]=useState([])
	let data = JSON.parse(localStorage.getItem("register_students")) || [];

	const delete_fun = (key) => {
		let updated = data.filter((el) => el.key !== key);
		setarr(updated);
		localStorage.setItem("register_students", JSON.stringify(updated));
	};

	return (
		<div>
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
					{data.map((el) => (
						<tr key={el.key}>
							<td>{el.name}</td>
							<td>{el.course}</td>
							<td>{el.gmail}</td>
							<td>{el.mobile}</td>
							<td id="delete_button" onClick={() => delete_fun(el.key)}>
								Delete
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Register
