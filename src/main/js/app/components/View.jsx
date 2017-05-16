import React from 'react';
import PropTypes from 'prop-types'

import UploadForm from 'upload/components/Form';

export default function View () {
	return (
		<div className="app-view">
			<div className="splash">
				[ this might be offensive ]
			</div>
			<UploadForm />
		</div>
	);
}
