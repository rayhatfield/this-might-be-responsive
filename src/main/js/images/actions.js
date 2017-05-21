import {getClient} from 'utils';

import {
	REQUEST_IMAGES,
	RECEIVE_IMAGES,
	REQUEST_UPLOAD,
	RECEIVE_UPLOAD
} from './reducer';

export const loadImages = () => (
	(dispatch) => {
		dispatch({
			type: REQUEST_IMAGES
		});
		getClient().loadImages()
			.then( result => dispatch({
				type: RECEIVE_IMAGES,
				payload: result
			}));
	}
);

export const getUpload = (id) => (
	(dispatch) => {
		dispatch({
			type: REQUEST_UPLOAD,
			id
		});
		getClient().getUpload(id)
			.then( result => dispatch({
				type: RECEIVE_UPLOAD,
				id,
				payload: result
			}));
	}
);
