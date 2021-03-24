import React from 'react';
import 'react-table';
import { useTable } from 'react-table';

class Entrybox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			myText: ''
		};
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div>
				<input type="text" id="myText" 
					value={this.state.myText}
					onChange={(newText) => {

						newText = toString(newText);
						this.setState({
							myText: newText
						});
					}
				}/>
			</div>
		);
	}
}

export default Entrybox;