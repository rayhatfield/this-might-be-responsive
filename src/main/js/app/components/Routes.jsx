import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {View as About} from 'about';
import {View as Login} from 'login';
import {View as Images} from 'images';
import {View as Discussions} from 'discussions';

import NotFound from './NotFound';

export default function Routes () {
	return (
		<Switch>
			<Route path="/images" component={Images} />
			<Route path="/discussions" component={Discussions} />
			<Route path="/login" component={Login} />
			<Route path="/about" component={About} />
			<Route component={NotFound} />
		</Switch>
	);
}
