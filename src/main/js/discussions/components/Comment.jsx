import React from 'react';
import PropTypes from 'prop-types';

import {link} from 'autolinker';

Comment.propTypes = {
	item: PropTypes.shape({
		comment: PropTypes.string,
		timestamp: PropTypes.string,
		username: PropTypes.string,
		userid: PropTypes.string,
		fileid: PropTypes.string,
		id: PropTypes.string
	}).isRequired
};

export default function Comment ({item}) {
	return (
		<article className="comment">
			<div className="content" dangerouslySetInnerHTML={{__html: link(item.comment)}} />
			<footer>
				<div>{item.username}</div>
				<time>{item.timestamp}</time>
			</footer>
		</article>
	);
}
