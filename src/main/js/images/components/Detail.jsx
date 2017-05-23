import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Loading, NotFound} from 'common';

import {getUpload} from '../actions';

const getId = ({match}) => match.params.id;

class Detail extends React.PureComponent {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired
			}).isRequired
		}).isRequired,
		imagesState: PropTypes.object.isRequired,
		load: PropTypes.func.isRequired
	}

	state = {}

	componentDidMount () {
		this.setup();
	}

	componentWillReceiveProps (nextProps) {
		const newId = getId(nextProps);
		const curId = getId(this.props);

		if (newId !== curId) {
			this.setup(newId);
		}
	}

	setup (id = getId(this.props)) {
		const {imagesState: {items = []}, load} = this.props;
		const item = items.find(i => i.id == id); // double equal because our prop is a string
		if (item) {
			this.setState({
				item
			});
		}
		else {
			load(id);
		}
	}

	render () {
		const {imagesState: {loading, items = []}} = this.props;
		const id = getId(this.props);
		const item = this.state.item || items.find(i => i.id == id);

		if (loading) {
			return <Loading />;
		}

		if (!item) {
			return <NotFound />;
		}

		return (
			<figure className="image-detail">
				<figcaption>
					<Link rel="author" to={`/users/${item.userid}`}>{item.username}</Link>
				</figcaption>
				<img src={item.link_file} />
			</figure>
		);
	}
}

const mapStateToProps = ({images: imagesState}) => ({
	imagesState
});

const mapDispatchToProps = (dispatch) => ({
	load: (id) => dispatch(getUpload(id))
});

import {connect} from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
