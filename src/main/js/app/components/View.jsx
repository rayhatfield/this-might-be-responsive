import React from 'react';
import PropTypes from 'prop-types'

import {View as Login} from 'login';

export default function View () {
	return (
		<div className="app-view">
			<div className="splash">
				[ this might be offensive ]
			</div>
			<Login />
		</div>
	);
}
