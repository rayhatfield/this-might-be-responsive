import {getClient} from 'utils';

import {REQUEST_IMAGES, RECEIVE_IMAGES} from './reducer';

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
