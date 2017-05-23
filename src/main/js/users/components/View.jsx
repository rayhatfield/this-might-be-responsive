import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import {NotFound} from 'common';

import Detail from './Detail';

export default class View extends React.Component {

	static propTypes = {
		match: PropTypes.object.isRequired
	}

	render () {

		const {match: {url}} = this.props;

		return (
			<Switch>
				<Route exact path={`${url}/:id`} component={Detail} />
				{/* todo: redirect '/' route to current user */}
				<Route component={NotFound} />
			</Switch>
		);
	}
}
