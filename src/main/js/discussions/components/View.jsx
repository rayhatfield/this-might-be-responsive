import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import {NotFound} from 'app';

import List from './List';
import Detail from './Detail';

View.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired
	})
};

export default function View ({match}) {

	const {params: {url}} = match;

	return (
		<div className="discussions">
			[ discussions ]
			<Switch>
				<Route exact path={url} component={List} />
				<Route exact path={`${url}/:id`} component={Detail} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
