import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../../reducers';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

export default function View () {
	return (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
}
