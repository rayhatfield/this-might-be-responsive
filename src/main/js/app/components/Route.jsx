import React from 'react';
import PropTypes from 'prop-types';
import {Route as R, Redirect} from 'react-router-dom';

Route.propTypes = {
	userid: PropTypes.string,
	unauthenticated: PropTypes.bool,
	path: PropTypes.any,
	component: PropTypes.func
};

function Route ({userid, unauthenticated = false, path, component, ...other}) {

	const Component = userid || unauthenticated ? component : AccessDenied;

	return (
		<R path={path} component={Component} {...other} />
	);
}

function AccessDenied () {
	return <Redirect to="/login" />;
}

const mapStateToProps = ({login: {userid}}) => ({userid});
import {connect} from 'react-redux';
export default connect(mapStateToProps)(Route);
