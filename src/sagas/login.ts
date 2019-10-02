import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../reducers/login/types';
import { LoginSuccess, loginFailure } from '../reducers/login/actions';

export function* watchForLoginRequest() {
  console.log('a')
  yield takeEvery(LOGIN_REQUEST, requestLogin);
}

function* requestLogin() {
  try {
    const response = yield axios.post('http://localhost:3001/login');
    yield put(LoginSuccess(response))
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}