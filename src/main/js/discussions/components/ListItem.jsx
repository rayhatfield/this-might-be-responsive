import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router';

ListItem.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired
	}).isRequired,

	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		filename: PropTypes.string.isRequired,
		comments: PropTypes.number
	}).isRequired
};

function ListItem ({item: {id, filename, comments}, match}) {
	return (
		<Link to={`${match.url}/${id}`}>
			<div className="topic-list-item">
				{filename} [{comments}]
			</div>
		</Link>
	);
}

export default withRouter(ListItem);
