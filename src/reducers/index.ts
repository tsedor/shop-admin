import { combineReducers } from 'redux';
import { loginReducer } from './login/reducers';

export const reducers = combineReducers({
  loginReducer
});

export type AppState = ReturnType<typeof reducers>