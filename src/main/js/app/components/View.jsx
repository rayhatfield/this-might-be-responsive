import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import App from './App';

export default function View () {
	return (
		<Router>
			<App />
		</Router>
	);
}
