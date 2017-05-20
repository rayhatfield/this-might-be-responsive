import React from 'react';
import PropTypes from 'prop-types';

import {loadImages} from '../actions';

import {Loading} from 'common';

import ListItem from './ListItem';

class List extends React.Component {

	static propTypes = {
		load: PropTypes.func.isRequired,
		imagesState: PropTypes.object.isRequired
	}

	componentDidMount () {
		const {load} = this.props;
		load();
	}

	render () {
		const {imagesState: {loading, items = []}} = this.props;
		return loading ? <Loading /> : (
			<ul className="image-list">
				{items.map( item => <li key={item.id}><ListItem item={item} /></li> )}
			</ul>
		);
	}
}

const mapStateToProps = (state) => ({
	imagesState: state.images
});

const mapDispatchToProps = (dispatch) => ({
	load: () => dispatch(loadImages())
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(List);
