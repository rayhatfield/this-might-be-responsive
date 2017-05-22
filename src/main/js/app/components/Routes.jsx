import React from 'react';
import {Switch} from 'react-router-dom';

import {View as About} from 'about';
import {View as Login, Logout} from 'login';
import {View as Images} from 'images';
import {View as Discussions} from 'discussions';
import {NotFound} from 'common';

import Route from './Route';

export default function Routes () {
	return (
		<Switch>
			<Route path="/login" unauthenticated component={Login} />
			<Route path="/images" component={Images} />)
			<Route path="/discussions" component={Discussions} />
			<Route path="/logout" component={Logout} />
			<Route path="/about" component={About} />
			<Route unauthenticated component={NotFound} />
		</Switch>
	);
}
