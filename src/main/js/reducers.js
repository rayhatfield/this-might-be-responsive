import {combineReducers} from 'redux';

import {reducer as images} from 'images';
import {reducer as discussions} from 'discussions';

export default combineReducers({
	images,
	discussions
});
