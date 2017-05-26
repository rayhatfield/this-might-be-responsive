import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import {UserLink} from 'common';

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

function ListItem ({item: {id, filename, comments, userid, username}, match}) {
	return (
		<div className="topic-list-item">
			<Link to={`${match.url}/${id}`}>{filename}</Link>
			<div className="meta">
				<UserLink userid={userid}>{username}</UserLink>
				<div>{comments} comments</div>
			</div>
		</div>
	);
}

export default withRouter(ListItem);
