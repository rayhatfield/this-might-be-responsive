import {combineReducers} from 'redux';

import {reducer as login} from 'login';
import {reducer as images} from 'images';
import {reducer as discussions} from 'discussions';
import {reducer as users} from 'users';

export default combineReducers({
	login,
	images,
	discussions,
	users
});
