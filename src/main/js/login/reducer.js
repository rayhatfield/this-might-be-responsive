import {getClient} from 'utils';

export const LOGIN_REQUEST_START = 'LOGIN_REQUEST_START';
export const LOGIN_RESPONSE_RECEIVED = 'LOGIN_RESPONSE_RECEIVED';
export const RESTORE_SESSION_START = 'RESTORE_SESSION_START';
export const RESTORE_RESPONSE_RECEIVED = 'RESTORE_RESPONSE_RECEIVED';
export const RESTORE_RESPONSE_ERROR = 'RESTORE_RESPONSE_ERROR';
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

	RESTORE_SESSION_START: (state = {}) => ({...state, loading: true}),

	RESTORE_RESPONSE_RECEIVED: (state = {}, {response: {userid, status}}) => {
		if (status === 401) {
			return {
				...state,
				restore: 'failed'
			};
		}
		return {
			...state,
			userid,
			loading: false
		};
	},

	RESTORE_RESPONSE_ERROR: (state = {}) => {
		return {
			...state,
			loading: false,
			restore: 'failed'
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
