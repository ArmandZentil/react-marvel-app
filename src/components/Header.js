import React from 'react';
import FilterBar from './FilterBar'

function Header(props) {
	return (
		<header className="Header__Component">
		  <h1>{props.title}</h1>
		  <p>{props.message}</p>
		  <FilterBar />
		</header>
	);
};

export default Header;