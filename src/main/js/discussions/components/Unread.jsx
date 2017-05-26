import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {loadUnread} from '../actions';

class Unread extends React.Component {

	static propTypes = {
		load: PropTypes.func.isRequired,
		unread: PropTypes.array.isRequired
	}

	constructor (props) {
		super(props);
		this.loadData();
	}

	loadData = () => this.props.load()

	render () {

		const {unread} = this.props;

		return (
			<ul className="unread-comments">
				{unread.map( u => (
					<li key={u.id}>
						<Link to={`/discussions/${u.fileid}/`}>{u.filename}</Link>
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = ({discussions = {}}) => ({
	unread: discussions.unread || []
});

const mapDispatchToProps = (dispatch) => ({
	load: () => dispatch(loadUnread())
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Unread);
