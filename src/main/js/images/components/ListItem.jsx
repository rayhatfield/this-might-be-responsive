import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

ListItem.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired
	}),
	
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		filename: PropTypes.string.isRequired,
		link_thumb: PropTypes.string.isRequired,
		vote_good: PropTypes.number.isRequired,
		vote_bad: PropTypes.number.isRequired
	}).isRequired
};

function ListItem ({item: {id, filename, link_thumb, vote_good, vote_bad}, match}) {
	return (
		<Link to={`${match.url}/${id}`}>
			<figure className="image-list-item">
				<div className="thumb"><img src={link_thumb} /></div>
				<figcaption>{filename} [+ {vote_good}] [- {vote_bad}]</figcaption>
			</figure>
		</Link>
	);
}

export default withRouter(ListItem);
