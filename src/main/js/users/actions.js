import {getClient} from 'utils';

import {
	REQUEST_USER,
	RECEIVE_USER
} from './reducer';

export const getUser = (id) => (
	(dispatch) => {
		dispatch({
			type: REQUEST_USER,
			id
		});
		getClient().getUser(id)
			.then( result => dispatch({
				type: RECEIVE_USER,
				id,
				payload: result
			}));
	}
);
