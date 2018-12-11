import React from 'react';

function Header(props) {
	return (
		<header className="Header__Component">
		  <h1>{props.title}</h1>
		  <p>{props.message}</p>
		</header>
	);
};

export default Header;