import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {resolve} from 'url';

import {keydownEvents} from 'utils';

class NextLink extends React.Component {

	static propTypes = {
		currentId: PropTypes.string.isRequired,
		previous: PropTypes.bool, // link to previous instead of next
		images: PropTypes.array.isRequired,
		match: PropTypes.object.isRequired // router match
	}

	onKeyDown = (e) => {
		console.warn('handle key down not implemented');
	}

	render () {

		const {currentId, images, previous, match: {url}} = this.props;
		const intId = parseInt(currentId, 10); // ids are integers in the image objects

		// consider reducing to the ids array elsewhere instead of doing it every time this component renders
		const currentIndex = images.reduce((result, item) => {result.push(item.id); return result;}, [] ).indexOf(intId);

		// still weirds me out that arrays in js don't throw out of bounds exceptions
		const item = images[currentIndex + (previous ? 1 : -1)];

		if (!item) {
			return null;
		}

		const href = (resolve(url, `${item.id}`));

		return (
			<Link to={href}>{item.filename}</Link>
		);
	}
}

const mapStateToProps = ({images: {items = []}}) => ({images: items});

import {connect} from 'react-redux';
export default withRouter(connect(mapStateToProps)(keydownEvents(NextLink, 'onKeyDown', ['ArrowLeft', 'ArrowRight'])));
