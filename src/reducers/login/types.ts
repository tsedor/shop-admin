export const CLEAN_ERROR = 'CLEAN_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface CleanError {
  type: typeof CLEAN_ERROR
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST,
  login: string,
  password: string
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE,
  error: string
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
  jwt: string
}

export type LoginActionTypes = LoginRequest | LoginFailure | LoginSuccess | CleanError;