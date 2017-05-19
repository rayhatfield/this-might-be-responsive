import React from 'react';
import PropTypes from 'prop-types';

import {getClient} from '../../util/';

import Form from './Form';

export default class View extends React.Component {

	onSubmit ({username, password}) {
		getClient().login(username, password);
	}

	render () {
		return (
			<Form onSubmit={this.onSubmit} />
		);
	}
}
