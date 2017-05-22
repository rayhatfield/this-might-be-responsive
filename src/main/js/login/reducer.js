import {getClient} from 'utils';

export const LOGIN_RESPONSE_RECEIVED = 'LOGIN_RESPONSE_RECEIVED';
export const LOGIN_REQUEST_START = 'LOGIN_REQUEST_START';
export const LOGOUT = 'LOGOUT';

const HANDLERS = {
	LOGIN_REQUEST_START: ({attempts}) => ({loading: true, attempts}),

	LOGIN_RESPONSE_RECEIVED: (state = {}, {response: {userid, status}}) => {
		if (status === 401) {
			return {
				attempts: (state.attempts || 0) + 1
			};
		}
		return {
			userid
		};
	},

	LOGOUT: (state = {}) => {
		getClient().logout();
		return {
			...state,
			userid: null
		};
	}
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
