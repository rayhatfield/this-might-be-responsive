import {getClient} from 'utils';

import {
	REQUEST_DISCUSSIONS,
	RECEIVE_DISCUSSIONS,
	REQUEST_THREAD,
	RECEIVE_THREAD,
} from './reducer';

export const loadDiscussions = () => (
	(dispatch) => {
		dispatch({
			type: REQUEST_DISCUSSIONS
		});
		getClient().loadDiscussions()
			.then( result => dispatch({
				type: RECEIVE_DISCUSSIONS,
				payload: result
			}));
	}
);

export const loadThread = (id) => (
	(dispatch) => {
		dispatch({
			type: REQUEST_THREAD,
			id
		});
		getClient().getComments(id)
			.then( result => dispatch({
				type: RECEIVE_THREAD,
				id,
				payload: result
			}));
	}
);
