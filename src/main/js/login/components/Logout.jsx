import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {logout as logoutAction} from '../actions';

class Logout extends React.Component {

	static propTypes = {
		logout: PropTypes.func.isRequired,
		userid: PropTypes.string
	}

	componentDidMount () {
		const {logout} = this.props;
		logout();
	}

	render () {
		const {userid} = this.props;
		return (
			userid ? <div className="logging-out">[ Logging Out ]</div> : <Redirect to="/" />
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logoutAction())
});

const mapStateToProps = ({login: {userid}}) => ({userid});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
