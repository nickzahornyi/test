import React, { Component } from 'react';

import Slider from 'react-slick';

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
class App extends Component {
	render() {
		const settings = {
			dots: false,
			arrows: false,
			vertical: true,
			autoplay: true,
			autoplaySpeed: 3000,
			// lazyLoad: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			rtl: true,
			pauseOnHover: false,
			speed: 1000,
			cssEase: 'cubic-bezier(0.575, -0.030, 0.340, 1.545)'
			// easing: 'cubic-bezier(0.100, -0.280, 0.735, 0.045)'
		};
		return (
			<div className="container">
				<Slider {...settings}>
					{INFO.map((item, index) => (
						<div key={index} className="qqq">
							<p>{item.name}</p>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

export default App;
