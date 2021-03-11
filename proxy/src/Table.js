import React from 'react';
import 'react-table';
import { useTable } from 'react-table';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			table_data: props.table_data
		};
	}

	componentDidMount() {

	}

	renderTableData() {
		return this.state.table_data.map((catagory) => {
			let {cat_id, cat_name, cat_monday, cat_tuesday, cat_wednesday, cat_thursday, cat_friday, cat_saturday, cat_sunday} = catagory;
			console.log(cat_name);
			return (
				<tr key = {cat_id}>
					<td>{cat_name}</td>
					<td>{cat_monday}</td>
					<td>{cat_tuesday}</td>
					<td>{cat_wednesday}</td>
					<td>{cat_thursday}</td>
					<td>{cat_friday}</td>
					<td>{cat_saturday}</td>
					<td>{cat_sunday}</td>
				</tr>
			);
		})
	}

	render() {
		return(
			<div className="Table">
				<h1>Table header</h1>
				<table>
					<tbody>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		);
	}

	
}

export default Table;