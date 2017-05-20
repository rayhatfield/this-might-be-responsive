import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import '../resources/scss/main.scss';

import {View} from 'app';

ReactDOM.render((
		<View />
	),
	document.getElementById('app-root')
);
