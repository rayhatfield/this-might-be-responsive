import React from 'react';
import PropTypes from 'prop-types';

import {Loading, NotFound} from 'common';

import {getUser} from '../actions';

const getId = ({match}) => match.params.id;

class Detail extends React.Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired
			}).isRequired
		}).isRequired,
		loading: PropTypes.bool,
		byId: PropTypes.object,
		load: PropTypes.func.isRequired
	}

	componentDidMount () {
		this.setup();
	}

	componentWillReceiveProps (nextProps) {
		const newId = getId(nextProps);
		const curId = getId(this.props);

		if (newId !== curId) {
			this.setup(newId);
		}
	}

	setup (id = getId(this.props)) {
		const {byId = {}, load} = this.props;
		const user = byId[id];
		if (!user) {
			load(id);
		}
	}

	render () {
		const {loading, byId = {}} = this.props;
		const user = byId[getId(this.props)] || {};

		if (loading) {
			return <Loading />;
		}

		if (!user) {
			return <NotFound />;
		}

		return (
			<div className="">
				<div>{user.username} has been around since {user.created}</div>
			</div>
		);
	}
}

const mapStateToProps = ({users: {byId, loading}}) => ({
	byId,
	loading
});

const mapDispatchToProps = (dispatch) => ({
	load: (id) => dispatch(getUser(id))
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
