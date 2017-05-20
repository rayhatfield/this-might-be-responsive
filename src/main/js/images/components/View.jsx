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

export default function View ({match: {url}}) {
	return (
		<div className="images">
			<div>[ images ]</div>
			<Switch>
				<Route exact path={url} component={List} />
				<Route exact path={`${url}/:id`} component={Detail} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
