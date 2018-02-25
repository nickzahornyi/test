import React, { Component } from 'react';
import Item from './Item';

const INFO = [
	{
		name: 1
	},
	{
		name: 2
	},
	{
		name: 3
	},
	{
		name: 4
	},
	{
		name: 5
	}
];

class Items extends Component {
	render() {
		return INFO.map(item => <Item key={item.name} name={item.name} />);
	}
}

export default Items;
