import {getClient} from 'utils';

import {REQUEST_DISCUSSIONS, RECEIVE_DISCUSSIONS} from './reducer';

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
