import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AppState } from '../../../reducers';

const Main: React.FC = () => {
    const isLogged = useSelector((state: AppState) => state.loginReducer.loggedIn);
    return (
      <>
        {!isLogged && <Redirect to="/login" />}
        <div>Main</div>
      </>
    )
}

export default Main;