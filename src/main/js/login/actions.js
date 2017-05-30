import {getClient} from 'utils';
import {
	LOGIN_REQUEST_START,
	LOGIN_RESPONSE_RECEIVED,
	RESTORE_SESSION_START,
	RESTORE_RESPONSE_RECEIVED,
	RESTORE_RESPONSE_ERROR,
	LOGOUT
} from './reducer';

export const login = (username, password) => (
	(dispatch) => {
		dispatch({
			type: LOGIN_REQUEST_START,
			username
		});

		getClient().login(username, password)
			.then(response => (
				dispatch({
					type: LOGIN_RESPONSE_RECEIVED,
					response
				})
			));
	}
);

export const restoreSession = () => (
	(dispatch) => {
		dispatch({
			type: RESTORE_SESSION_START
		});

		getClient().getCurrentUser()
			.then(response => (
				dispatch({
					type: RESTORE_RESPONSE_RECEIVED,
					response
				})
			))
			.catch(reason => (
				dispatch({
					type: RESTORE_RESPONSE_ERROR,
					reason
				})
			));
	}
);

export const logout = () => ({
	type: LOGOUT
});
