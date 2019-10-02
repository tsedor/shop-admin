import { all, fork } from 'redux-saga/effects';

import { watchForLoginRequest } from './login';

export const rootSaga = function* root() {
  yield all([
    fork(watchForLoginRequest)
  ])
}