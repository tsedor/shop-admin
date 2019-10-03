import { LoginState } from "../types";
import { LoginActionTypes, LOGIN_FAILURE, LOGIN_REQUEST } from "./types";

const initialState: LoginState = {
  requested: false,
  error: '',
  loggedIn: false,
  jwt: ''
}

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        requested: true
      }
    case LOGIN_FAILURE: 
      return {
        ...state,
        error: action.error,
        requested: false
      };
    default:
      return state;
  }
}