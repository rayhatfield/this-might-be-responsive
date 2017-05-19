import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {View} from 'app';

import {getClient} from './util/';

import '../resources/scss/main.scss';

ReactDOM.render((
		<View />
	),
	document.getElementById('app-root')
);
