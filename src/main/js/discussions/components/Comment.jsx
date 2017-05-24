import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import moment from 'moment';

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
				<div><Link to={`/users/${item.userid}`} rel="author">{item.username}</Link></div>
				<time title={item.timestamp} dateTime={item.timestamp}>{moment(item.timestamp).fromNow()}</time>
			</footer>
		</article>
	);
}
