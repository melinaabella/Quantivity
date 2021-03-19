import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';


const table_data = [
	{cat_id: 0, cat_name: 'Practice Violin', cat_data: [1, 0, 1, 0, 1, 0, 1]},
	{cat_id: 1, cat_name: 'Write', cat_data: [0, 1, 1, 0, 1, 1, 1]},
	{cat_id: 2, cat_name: 'Clean Room', cat_data: [0, 1, 1, 0, 1, 1, 1]},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiResponse:''
		};
	}

	callAPI() {
		fetch('http://localhost:9000/testAPI').then((res) => {
			return res.text();
		}).then((text) => {
			console.log(text);
			this.setState({
				apiResponse: text
			})
		});
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="App">
				
				<Table table_data={table_data}/>
				
			</div>
		);
	}
}



export default App;
