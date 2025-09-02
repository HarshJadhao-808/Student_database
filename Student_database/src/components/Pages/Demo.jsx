import React, { useState } from 'react'
const Demo = () => {
  let data = JSON.parse(localStorage.getItem("demo_students")) || [];
  const [demo,setdemo]=useState(data)
  	const delete_fun = (key) => {
      let filtered=data.filter((el)=> el.key !== key)
			setdemo(filtered);
			localStorage.setItem("demo_students", JSON.stringify(filtered));
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

export default Demo
