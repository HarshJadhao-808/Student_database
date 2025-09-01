import React,{useState,useEffect} from "react";
const Database = () => {
	const [arr, setArr] = useState([]);


	useEffect(() => {
		let student_arr = JSON.parse(localStorage.getItem("student_arr")) || [];
		setArr(student_arr);
	}, []); 

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
							<tr key={el.name} >
								<td>{el.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Database;




