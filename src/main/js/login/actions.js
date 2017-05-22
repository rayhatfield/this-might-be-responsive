import {getClient} from 'utils';
import {
	LOGIN_REQUEST_START,
	LOGIN_RESPONSE_RECEIVED,
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

export const logout = () => ({
	type: LOGOUT
});
