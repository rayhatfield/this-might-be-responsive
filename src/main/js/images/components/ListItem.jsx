import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import cx from 'classnames';

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

function ListItem ({item: {id, filename, link_thumb, vote_good, vote_bad, nsfw, tmbo, subscribed}, match}) {

	const classes = cx('image-list-item', {nsfw, tmbo, subscribed});

	return (
		<Link to={`${match.url}/${id}`}>
			<figure className={classes}>
				<div className="thumb"><img src={link_thumb} /></div>
				<figcaption>
					<div className="filename">{filename}</div>
					<div className="votes good">{vote_good}</div>
					<div className="votes bad">{vote_bad}</div>
				</figcaption>
			</figure>
		</Link>
	);
}

export default withRouter(ListItem);
