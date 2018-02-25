import React, { Component } from 'react';

class Item extends Component {
	render() {
		return (
			<div className="qqq">
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default Item;
