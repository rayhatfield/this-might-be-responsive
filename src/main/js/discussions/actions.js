import {getClient} from 'utils';

import {
	REQUEST_DISCUSSIONS,
	RECEIVE_DISCUSSIONS,
	REQUEST_THREAD,
	RECEIVE_THREAD,
	POST_COMMENT_START,
	POST_COMMENT_COMPLETE,
	REQUEST_UNREAD,
	RECEIVE_UNREAD
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

export const postComment = (threadid, comment) => (
	(dispatch) => {
		dispatch({
			type: POST_COMMENT_START
		});
		getClient().postComment(threadid, comment)
			.then( result => dispatch({
				type: POST_COMMENT_COMPLETE,
				threadid,
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

export const loadUnread = () => (
	(dispatch) => {
		dispatch({
			type: REQUEST_UNREAD
		});
		getClient().getUnread()
			.then( result => dispatch({
				type: RECEIVE_UNREAD,
				payload: result
			}));
	}
);
