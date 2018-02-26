import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redusers.js';
import rootSaga from './saga';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [sagaMiddleware];

	const enhancers = [applyMiddleware(...middlewares), devtools()];

	const store = createStore(rootReducer, initialState, compose(...enhancers));

	sagaMiddleware.run(rootSaga);

	return store;
}
