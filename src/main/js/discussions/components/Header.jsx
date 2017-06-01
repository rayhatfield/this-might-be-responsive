import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {Loading, UserLink} from 'common';

import {getUpload} from 'images/actions';

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

		const topic = topics.find( t => t.id == id);

		if (!topic) {
			return null;
		}

		return (
			<header>
				<h1>{topic.filename}</h1>
				<div className="meta">
					<UserLink userid={topic.userid}>{topic.username}</UserLink> started it <time title={topic.timestamp} dateTime={topic.timestamp}>{moment(topic.timestamp).fromNow()}</time>.
				</div>
			</header>
		);
	}
}

const mapStateToProps = ({images: {items = [], loading: imagesLoading}, discussions: {topics = [], loading: discussionsLoading}}) => ({
	topics: [...items, ...topics],
	loading: imagesLoading || discussionsLoading
});

const mapDispatchToProps = (dispatch) => ({
	load: (id) => dispatch(getUpload(id))
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Header);
