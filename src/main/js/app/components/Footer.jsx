import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default function Footer () {
	return (
		<footer className="app-footer">
			<Link to="/about">about</Link>
		</footer>
	);
}
