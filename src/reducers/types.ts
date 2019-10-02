export interface LoginState {
  requested: boolean,
  error: string,
  loggedIn: boolean
  jwt: string
}