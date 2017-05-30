import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {resolve} from 'url';
import cx from 'classnames';

import {keydownEvents} from 'utils';

const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

class NextLink extends React.Component {

	static propTypes = {
		currentId: PropTypes.string.isRequired,
		previous: PropTypes.bool, // link to previous instead of next
		images: PropTypes.array.isRequired,
		match: PropTypes.object.isRequired, // router match
		history: PropTypes.object.isRequired // provided by withRouter
	}

	state = {}

	componentDidMount () {
		this.setup();
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.currentId !== this.props.currentId) {
			this.setup(nextProps);
		}
	}

	setup(props = this.props) {
		const {currentId, images, previous, match: {url}} = props;
		const intId = parseInt(currentId, 10); // ids are integers in the image objects

		// consider reducing to the ids array elsewhere instead of doing it every time this component renders
		const currentIndex = images.reduce((result, item) => {result.push(item.id); return result;}, [] ).indexOf(intId);

		// still weirds me out that arrays in js don't throw out of bounds exceptions
		const item = images[currentIndex + (previous ? 1 : -1)];

		if (!item) {
			this.setState({
				item: null,
				href: null
			});
		}
		else {
			const href = (resolve(url, `${item.id}`));

			this.setState({
				item,
				href
			});
		}
	}

	onKeyDown = ({key}) => {
		const {state: {href}, props: {history, previous}} = this;

		if (href && history) {
			if (key === ARROW_RIGHT && previous || key === ARROW_LEFT && !previous) {
				history.push(href);
			}
		}
	}

	render () {
		const {previous} = this.props;
		const {item, href} = this.state;

		if (!href) {
			return null;
		}

		const classname = previous ? 'older' : 'newer';

		return (
			<Link to={href} className={cx('next-link', classname)}><span className="filename">{item.filename}</span></Link>
		);
	}
}

const mapStateToProps = ({images: {items = []}}) => ({images: items});

import {connect} from 'react-redux';
export default withRouter(connect(mapStateToProps)(keydownEvents(NextLink, 'onKeyDown', [ARROW_LEFT, ARROW_RIGHT])));
