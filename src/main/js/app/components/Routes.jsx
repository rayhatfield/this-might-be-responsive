import React from 'react';
import {Switch, Redirect} from 'react-router-dom';

import {NotFound} from 'common';
import {View as About} from 'about';
import {View as Discussions} from 'discussions';
import {View as Images} from 'images';
import {View as Login, Logout} from 'login';
import {View as Users} from 'users';

import Route from './Route';

export default function Routes () {
	return (
		<Switch>
			<Route path="/login" unauthenticated component={Login} />
			<Route path="/images" component={Images} />)
			<Route path="/discussions" component={Discussions} />
			<Route path="/logout" component={Logout} />
			<Route path="/about" component={About} />
			<Route path="/users" component={Users} />
			<Redirect from="/" to="/images"/>
			<Route unauthenticated component={NotFound} />
		</Switch>
	);
}
