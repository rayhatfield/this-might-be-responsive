import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {login as loginAction} from '../actions';
import Form from './Form';

class View extends React.Component {

	static propTypes = {
		login: PropTypes.func.isRequired,
		userid: PropTypes.any,
		attempts: PropTypes.number,
		loading: PropTypes.bool
	}

	onSubmit = ({username, password}) => {
		const {login} = this.props;
		login(username, password);
	}

	render () {
		const {userid, attempts = 0, loading} = this.props;
		return (
			userid
			? <Redirect to="/images" />
			: (
				<div className="login-view">
					<Form onSubmit={this.onSubmit} />
					{loading && '[ Loading ]'}
					<div>{attempts}</div>
					<div>{userid}</div>
				</div>
			)
		);
	}
}

const mapStateToProps = ({login: {userid, attempts, loading}}) => ({userid, attempts, loading});

const mapDispatchToProps = (dispatch) => ({
	login: (username, password) => dispatch(loginAction(username, password))
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(View);
