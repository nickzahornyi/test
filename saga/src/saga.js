import { take, put, call, fork, select, takeLatest } from 'redux-saga/effects';

import { isLoaded } from './actions';

function* watchSelectLanguage() {
	yield take('START');
	console.log('star');
	yield fork(showData);
}

function* showData() {
	yield put(isLoaded());
}

export default function* root() {
	yield fork(watchSelectLanguage);
}
