import React from 'react';
import PropTypes from 'prop-types';

import Thread from './Thread';

Detail.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default function Detail ({match}) {
	const {params: {id}} = match;
	return (
		<div>
			<Thread id={id} />
		</div>
	);
}
