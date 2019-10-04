import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, LoginRequest } from '../reducers/login/types';
import { LoginSuccess, loginFailure } from '../reducers/login/actions';

export function* watchForLoginRequest() {
  console.log('a')
  yield takeEvery(LOGIN_REQUEST, requestLogin);
}

function* requestLogin(action: LoginRequest) {
  try {
    console.log(action)
    const response = yield axios.post('http://localhost:3500/api/login', {login: action.login, password: action.password}, {headers: {header1: 'Bearer'}});
    if (response.data.message === 'ok') {
      console.log(response.data)
      yield put(LoginSuccess(response.data.jwt))
    } else {
      yield put(loginFailure(response.data.error));
    }
  } catch (e) {
    console.log(e)
    yield put(loginFailure(e.message));
  }
}