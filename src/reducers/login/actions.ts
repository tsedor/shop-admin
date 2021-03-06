import { LoginActionTypes, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from './types';

export function loginRequest(login: string, password: string): LoginActionTypes {
  return {
    type: LOGIN_REQUEST,
    login,
    password
  }
}

export function loginFailure(error: string): LoginActionTypes {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function LoginSuccess(jwt: string): LoginActionTypes {
  return {
    type: LOGIN_SUCCESS,
    jwt
  }
}