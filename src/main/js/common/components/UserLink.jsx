import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

UserLink.propTypes = {
	userid: PropTypes.string.isRequired
};

export default function UserLink ({userid, ...others}) {
	return (
		<Link rel="author" to={`/users/${userid}`} {...others} />
	);
}
