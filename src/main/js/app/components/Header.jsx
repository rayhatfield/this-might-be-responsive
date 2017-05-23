import React from 'react';
import PropTypes from 'prop-types';
import {NavLink as Link} from 'react-router-dom';

Header.propTypes = {
	userid: PropTypes.string
};

function Header ({userid}) {
	return (
		<header className="app-header">
			<h1>[ this might be offensive ]</h1>
			{
				userid &&
				(
					<nav>
						<Link to="/images">images</Link>
						<Link to="/discussions">discussions</Link>
					</nav>
				)
			}
		</header>
	);
}

const mapStateToProps = ({login: {userid}}) => ({
	userid
});

import {connect} from 'react-redux';
export default connect(mapStateToProps)(Header);
