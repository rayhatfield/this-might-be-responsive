import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {ELLIPSIS_SVG} from 'common';

export default class DetailImage extends React.Component {

	static propTypes = {
		src: PropTypes.string.isRequired
	}

	state = {}

	componentDidMount () {
		const {src} = this.props;
		const preloader = new Image();
		preloader.addEventListener('load', this.onImageLoad);
		preloader.addEventListener('error', this.onImageError);
		preloader.src = src;
		this.preloader = preloader;
	}

	componentWillReceiveProps ({src}) {
		console.log('props');
		if (src !== this.props.src) {
			this.setState({
				loading: true
			});
			this.preloader.src = src;
		}
	}

	onImageError = (e) => {
		this.setState({
			loading: false
		});
		console.error(e);
	}

	onImageLoad = (e) => {
		this.setState({
			loading: false
		});
		this.img.src = this.preloader.src;
	}

	attachRef = x => this.img = x;

	render () {
		const {loading} = this.state;

		return (
			<img className={cx('detail-image', {loading})} ref={this.attachRef} src={ELLIPSIS_SVG} />
		);
	}
}
