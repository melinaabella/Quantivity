import React from 'react';

class Table extends React.Component {


	/**table_data structure
	 * [
	 * 		{
	 * 			cat_id: int
	 * 			cat_name: string
	 * 			cat_data: [int] length 7
	 * 		}
	 * 	 	{
	 * 			cat_id: int
	 * 			cat_name: string
	 * 			cat_data: [int] length 7
	 * 		}
	 * ]
	 */

	constructor(props) {
		super(props);
		this.state = {
			table_data: [],
			data_recieved: false
		};
	}

	fetchAPI(API_path) {
		console.log("fetchAPI called");
		return new Promise((resolve, reject) => {
			fetch('http://localhost:9000/' + API_path).then((response) => {
				return response.json();
			}).then((jsondata) => {
				resolve(jsondata.userdata);
			}).catch((error) => {
				reject(error);
			})
		});
	}

	postAPI(API_path, data) {
		console.log("postAPI called");
		fetch('http://localhost:9000/' + API_path, {
			method: "post",
			headers: { 'Content-type': "application/json" },
			body: JSON.stringify(data)
		}).then((res) => {
			//console.log(res);
		}).catch((err) => {
			console.log(err);
		});
	}

	componentDidMount() {

		console.log("componentDidMount called");

		this.fetchAPI('userData/get').then((jsondata) => {
			this.setState ({
				table_data: jsondata,
				data_recieved: true
			});
		}).catch((error) => {
			console.log(error);
		});
	}

	componentWillUnmount() {
		this.postAPI('userData/set', this.state.table_data);
	}

	renderDate() {
		let today = new Date(); // 30
		let day = today.getDay(); // 4
		let monday = new Date();

		monday.setDate(today.getDate() - (today.getDay() - 1));

		return (monday.getFullYear() + '/' + (monday.getMonth() + 1) + '/' + monday.getDate());
	}

	renderTableData = () => {
		return this.state.table_data.map((catagory, cat_index) => {
			let {cat_id, cat_name, cat_data} = catagory;
			let row = [];
			row = cat_data.map((data, row_index) => {
				return (
					<label className="container" id={cat_index + '-' + row_index}>
						<input
							type="checkbox"
							checked={data}
							onChange={() => {
								let new_table_data = this.state.table_data;
								new_table_data[cat_index].cat_data[row_index] = !new_table_data[cat_index].cat_data[row_index];
								this.setState({
									table_data: new_table_data
								});
							}}
						/>
						<span className="checkmark"></span>
					</label>
				);
			});
			row.unshift(
				<input
					type="text"
					id={cat_id}
					value={cat_name}
					onChange={(event) => {
						let new_table_data = this.state.table_data;
						new_table_data[cat_index].cat_name = event.target.value;
						this.setState({
							table_data: new_table_data
						});
					}}
				/>
			);
			return row;
		});
	}

	componentDidUpdate() {

	}

	render() {
		console.log("render called");
		if (this.state.data_recieved == true) {
			this.postAPI('userData/set', this.state.table_data);
		}
		return(
			<div>
				<h1>Your Weekly Agenda</h1>
				<div className="grid-container">
  					<h2>Week of: {this.renderDate()} </h2>
					<div className="item1">Mon</div>
					<div className="item2">Tues</div>
					<div className="item3">Wed</div>  
					<div className="item4">Thurs</div>
					<div className="item5">Fri</div>
					<div className="item6">Sat</div>
					<div className="item7">Sun</div>
					{this.renderTableData()}
				</div>
			</div>
		);
	}
}

export default Table;