import React, { Component } from 'react';
class App extends Component {
	constructor() {
		super();

		this.state = {
			value: 'Any Object Key and Value'
		};
	}

	render() {
		return (
			<div>
				Hello
				<div> World </div>
			</div>
		);
	}
}

export default App;
