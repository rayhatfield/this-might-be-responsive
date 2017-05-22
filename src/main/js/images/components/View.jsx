import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import {NotFound} from 'common';

import {Detail as Comments} from 'discussions'

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
			<Switch>
				<Route exact path={url} component={List} />
				<Route exact path={`${url}/:id`} component={Detail} />
				<Route exact path={`${url}/:id/comments`} component={Comments} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
}
