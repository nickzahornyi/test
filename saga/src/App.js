import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from './actions';

class App extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return <div>Saga</div>;
	}
}

export default connect(null, { getData })(App);
