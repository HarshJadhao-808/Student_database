import React,{useState,useEffect} from "react";
import "./database.css";
const Database = () => {
	const [arr, setArr] = useState([]);


	useEffect(() => {
		let student_arr = JSON.parse(localStorage.getItem("student_arr")) || [];
		setArr(student_arr);
	}, []); 


	const delete_fun = (key) => {
		setArr(arr.filter((el)=> el.key !== key ))
		localStorage.setItem("student_arr", JSON.stringify(arr));
		
	};



	console.log(arr);

	return (
		<>
			<table >
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
								<td id="delete_button" onClick={()=>delete_fun(el.key)  }>Delete</td>
								<td id="inquiry">Inquiry</td>
								<td id="registration">Registration</td>
								<td id="demo">Demo</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Database;




