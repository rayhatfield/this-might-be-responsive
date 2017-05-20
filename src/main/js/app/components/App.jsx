import React from 'react';

import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

export default function App () {
	return (
		<div className="app-view">
			<Header />
			<Routes />
			<Footer />
		</div>
	);
}
