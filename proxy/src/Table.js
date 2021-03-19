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

	render() {
		return(
			<div className="grid-container">
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