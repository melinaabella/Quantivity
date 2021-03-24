import React from 'react';
import 'react-table';
import { useTable } from 'react-table';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			table_data: [],
			didgetdata: false
		};
	}

	fetchAPI() {
		console.log("fetchAPI called");
		fetch('http://localhost:9000/userData/get').then((res) => {
			return res.json();
		}).then((myjson) => {
			this.setState({
				table_data: myjson.userdata
			})
		}).catch((err) => {
			console.log(err);
		});
	}

	postAPI() {
		console.log("postAPI called");
		fetch('http://localhost:9000/userData/set', {
			method: "post",
			headers: { 'Content-type': "application/json" },
			body: JSON.stringify(this.state.table_data)
		}).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		});
	}

	componentDidMount() {

		console.log("componentDidMount called");

		this.fetchAPI();

		this.setState({
			didgetdata: true
		});
	}

	componentWillUnmount() {
		this.postAPI();			
	}

	flip_table_data (target_id, target_day) {
		let new_table_data;
		new_table_data = this.state.table_data.map((catagory) => {
			let {cat_id, cat_name, cat_data} = catagory;
			if (cat_id == target_id) {
				let new_catagory = catagory;
				new_catagory.cat_data[target_day] = !cat_data[target_day];
				return new_catagory;
			} else {
				return catagory;
			}
		});
		this.setState({
			table_data: new_table_data
		});
	}

	renderDate() {
		let today = new Date(); // 30
		let day = today.getDay(); // 4
		let monday = new Date();

		monday.setDate(today.getDate() - (today.getDay() - 1));

		return (toString(monday.getFullYear) + '/' + (monday.getMonth() + 1) + '/' + monday.getDate());
	}

	renderTableData = () => {

		return this.state.table_data.map((catagory) => {
			let {cat_id, cat_name, cat_data} = catagory;
			return (
				<tr key = {cat_id}>
					
					<td>{cat_name}</td>
					
					{catagory.cat_data.map((data, index = 0) => {
						return (
							<td>
								<input
									//className="gridbox"
									type="checkbox"
									checked={data}
									onChange={() => {this.flip_table_data(cat_id, index++)}}
								/>
							</td>
						);
					})}
				</tr>
			);
		});
	}

	componentDidUpdate() {

	}

	render() {
		console.log("render called");
		if (this.state.didgetdata == true) {
			this.postAPI();
		}
		return(
			<div className="grid-container">
				
				<table>
					<thead>
						<tr>
							<td>
								{this.renderDate()}
							</td>
							<td>Monday</td>
							<td>Tuesday</td>
							<td>Wednesday</td>
							<td>Thursday</td>
							<td>Friday</td>
							<td>Saturday</td>
							<td>Sunday</td>
						</tr>
					</thead>
					<tbody>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		);
	}

	
}

export default Table;