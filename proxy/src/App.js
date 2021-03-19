import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="App">

				<Table/>
				
			</div>
		);
	}
}



export default App;
