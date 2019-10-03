import React from 'react';
import styled from 'styled-components';
import { Button, FormGroup, InputGroup, Tooltip } from '@blueprintjs/core';

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const StyledFormGroup = styled(FormGroup)`
  width: 200px;
`;

let showPassword = false;

const lockButton = (
  <Tooltip content={`${showPassword ? "Ukryj" : "Pokaż"} hasło`}>
    <Button icon={showPassword ? "unlock" : "lock"}></Button>
  </Tooltip>
)

const Login: React.FC = () => {
    return (
        <LoginContainer>
          <StyledFormGroup label="Login" labelFor="login">
            <InputGroup id="login" />
          </StyledFormGroup>
          <StyledFormGroup label="Hasło" labelFor="password">
            <InputGroup id="password" rightElement={lockButton} />
          </StyledFormGroup>
          <Button rightIcon="log-in">Zaloguj</Button>
        </LoginContainer>
    )
}

export default Login;