import { LoginState } from "../types";
import { LoginActionTypes } from "./types";

const initialState: LoginState = {
  user: {
    requested: false,
    error: '',
    loggedIn: false
  },
  jwt: ''
}

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    default:
      return state;
  }
}