import React from 'react';
import PropTypes from 'prop-types';

import {Loading} from 'common';

import {loadThread} from '../actions';

import Comment from './Comment';
import Editor from './Editor';
import Header from './Header';


class Thread extends React.Component {

	static propTypes = {
		id: PropTypes.string,
		commentsByThreadId: PropTypes.object,
		loading: PropTypes.bool,
		load: PropTypes.func
	};

	componentDidMount () {
		this.setup();
	}

	setup = (props = this.props) => {
		const {load, id} = props;
		load(id);
	}

	render () {

		const {loading, commentsByThreadId = {}, id} = this.props;

		const comments = (commentsByThreadId[id] || []).filter(c => c.comment);

		return (
			loading
			? <Loading />
			: (
				<section className="thread">
					<Header id={id} />
					{comments.map( item => <Comment key={item.id} item={item} />)}
					<Editor threadId={id} />
				</section>
			)
		);
	}
}

const mapStateToProps = ({discussions: {commentsByThreadId, loading}}) => ({
	commentsByThreadId,
	loading
});

const mapDispatchToProps = (dispatch) => ({
	load: (id) => dispatch(loadThread(id))
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Thread);
