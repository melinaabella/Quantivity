import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';


const table_data = [
	{cat_id: 1, cat_name: 'Practice Violin', cat_monday: 0, cat_tuesday: 1, cat_wednesday: 1, cat_thursday: 0, cat_friday: 0, cat_saturday: 0, cat_sunday: 0},
	{cat_id: 2, cat_name: 'Write', cat_monday: 0.5, cat_tuesday: 0, cat_wednesday: 1, cat_thursday: 0, cat_friday: 0, cat_saturday: 0, cat_sunday: 0},
	{cat_id: 3, cat_name: 'Clean Room', cat_monday: 0, cat_tuesday: 0, cat_wednesday: 0, cat_thursday: 0, cat_friday: 0, cat_saturday: 0, cat_sunday: 0},
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
				<header className="App-header"> 
					<img src={logo} className="App-logo" alt="logo" />
					<p> {this.state.apiResponse} </p>
				</header>
				<Table table_data={table_data}/>
				
			</div>
		);
	}
}



export default App;
