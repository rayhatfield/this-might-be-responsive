import React from 'react';
import PropTypes from 'prop-types';

import {Loading} from 'common';

import {loadDiscussions} from '../actions';

import ListItem from './ListItem';

class List extends React.Component {
	static propTypes = {
		load: PropTypes.func.isRequired,
		discussionsState: PropTypes.object.isRequired
	}

	componentDidMount () {
		const {load} = this.props;
		load();
	}

	render () {
		const {discussionsState: {loading, items = []}} = this.props;
		return loading ? <Loading /> : (
			<ul className="topic-list">
				{items.map( item => <li key={item.id}><ListItem item={item} /></li> )}
			</ul>
		);
	}
}

const mapStateToProps = (state) => ({
	discussionsState: state.discussions
});

const mapDispatchToProps = (dispatch) => ({
	load: () => dispatch(loadDiscussions())
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(List);
