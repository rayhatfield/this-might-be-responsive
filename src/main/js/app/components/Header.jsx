import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default function Header () {
	return (
		<header className="app-header">
			<h1>[ this might be offensive ]</h1>
			<nav>
				<Link to="/images">images</Link>
				<Link to="/discussions">discussions</Link>
			</nav>
		</header>
	);
}
