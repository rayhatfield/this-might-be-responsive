import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {Loading} from 'common';

import {login as loginAction, restoreSession} from '../actions';
import Form from './Form';

class View extends React.Component {

	static propTypes = {
		login: PropTypes.func.isRequired,
		attemptRestore: PropTypes.func.isRequired,
		restore: PropTypes.string,
		userid: PropTypes.any,
		attempts: PropTypes.number,
		loading: PropTypes.bool,
		match: PropTypes.object
	}

	componentDidMount () {
		const {userid, restore, attemptRestore} = this.props;

		if (!userid && restore !== 'failed') {
			attemptRestore();
		}
	}

	onSubmit = ({username, password}) => {
		const {login} = this.props;
		login(username, password);
	}

	render () {
		const {userid, attempts = 0, loading, match: {params = {}}} = this.props;

		const returnPath = decodeURIComponent(params.return) || '/images';

		if (loading) {
			return <Loading />;
		}

		return (
			userid
			? <Redirect to={returnPath} />
			: (
				<div className="login-view">
					<Form onSubmit={this.onSubmit} />
					{loading && <Loading />}
					<div>{attempts}</div>
				</div>
			)
		);
	}
}

const mapStateToProps = ({login: {userid, attempts, loading, restore}}) => ({userid, attempts, loading, restore});

const mapDispatchToProps = (dispatch) => ({
	login: (username, password) => dispatch(loginAction(username, password)),
	attemptRestore: () => dispatch(restoreSession())
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(View);
