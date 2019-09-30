

interface UserState {
  requested: boolean,
  error: string,
  loggedIn: boolean
}

export interface LoginState {
  user: UserState,
  jwt: string
}