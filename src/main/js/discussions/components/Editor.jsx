import React from 'react';
import PropTypes from 'prop-types';

import {postComment} from '../actions';

class Editor extends React.Component {

	static propTypes = {
		threadId: PropTypes.string.isRequired,
		save: PropTypes.func.isRequired
	}

	state = {}

	onChange = ({target: {value}}) => {
		this.setState({value});
	}

	onSubmit = () => {
		const {state: {value}, props: {save, threadId}} = this;
		save(threadId, value);
	}

	render () {
		const {state: {value = ''}} = this;
		const canSubmit = value.trim().length > 0;

		return (
			<div className="comment-editor">
				<textarea onChange={this.onChange} defaultValue={value} />
				<div className="controls">
					<button onClick={this.onSubmit} disabled={!canSubmit}>Go</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	save: (threadid, comment) => dispatch(postComment(threadid, comment))
});

import {connect} from 'react-redux';
export default connect(null, mapDispatchToProps)(Editor);
