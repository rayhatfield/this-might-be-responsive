import React from 'react';

import {getClient} from 'utils';

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
