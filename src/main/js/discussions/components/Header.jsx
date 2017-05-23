import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Loading} from 'common';

class Header extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		load: PropTypes.func.isRequired,
		topics: PropTypes.array,
		loading: PropTypes.bool
	}

	componentDidMount () {
		this.setup();
	}

	setup = (props = this.props) => {
		const {load, id} = props;
		load(id);
	}

	render () {
		const {loading, topics, id} = this.props;

		if (loading) {
			return <Loading />;
		}

		const topic = topics.find( t => t.id == id) || {};

		return (
			<header>
				<h1>{topic.filename}</h1>
				<Link to={`/users/${topic.userid}`}>{topic.username}</Link>
			</header>
		);
	}
}

const mapStateToProps = ({images: {items = [], loading: imagesLoading}, discussions: {topics = [], loading: discussionsLoading}}) => ({
	topics: [...items, ...topics],
	loading: imagesLoading || discussionsLoading
});

const mapDispatchToProps = (dispatch) => ({
	load: (id) => console.log('header:load not implemented.')
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Header);
