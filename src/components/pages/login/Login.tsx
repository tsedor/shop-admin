import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Alert, Button, FormGroup, InputGroup, Tooltip } from '@blueprintjs/core';
import { AppState } from '../../../reducers';
import { LOGIN_REQUEST, CLEAN_ERROR } from '../../../reducers/login/types';

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const StyledFormGroup = styled(FormGroup)`
  text-align: center;
  width: 200px;
`;


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [ showPassword, togglePass ] = useState(false);
  const [ login, changeLogin ] = useState("");
  const [ password, changePassword ] = useState("");
  const [ loginMin3, changeLoginMin3 ] = useState(false);
  const checkLogin = (value: string) => {
    value.length < 3 ? changeLoginMin3(true) : changeLoginMin3(false);
    console.log(loginMin3)
  }
  const loginRequested = useSelector((state: AppState) => state.loginReducer.requested);
  const error = useSelector((state: AppState) => state.loginReducer.error);
  const loggedIn = useSelector((state: AppState) => state.loginReducer.loggedIn);
  const lockButton = (
    <Tooltip content={`${showPassword ? "Ukryj" : "Pokaż"} hasło`}>
      <Button icon={showPassword ? "unlock" : "lock"}  onClick={() => togglePass(!showPassword)}></Button>
    </Tooltip>
  )
  return (
    <LoginContainer onKeyDown={(event: any) => {event.keyCode === 13 && dispatch({type: LOGIN_REQUEST, login, password})}}>
      {loggedIn && <Redirect to="/" />}
      <Alert isOpen={error ? true : false} onClose={() => dispatch({type: CLEAN_ERROR})}>
        Wystąpił nieoczekiwany błąd, spróbuj później.<br />{error}
      </Alert>
      <StyledFormGroup helperText={loginMin3 && "zbyt krótki login"} intent="danger" label="Login" labelFor="login">
        <InputGroup id="login" value={login} onChange={(event: any) => changeLogin(event.target.value)} onBlur={(event: any) => checkLogin(login)} />
      </StyledFormGroup>
      <StyledFormGroup label="Hasło" labelFor="password">
        <InputGroup id="password" value={password} onChange={(event: any) => changePassword(event.target.value)} rightElement={lockButton} type={showPassword ? "text" : "password"} />
      </StyledFormGroup>
      <Button rightIcon="log-in" loading={loginRequested} onClick={() => dispatch({type: LOGIN_REQUEST, login, password})}>Zaloguj</Button>
    </LoginContainer>
  )
}

export default Login;