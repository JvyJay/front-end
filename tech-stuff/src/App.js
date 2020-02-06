import React from 'react';
import OwnerDashBoard from './Components/OwnerDashBoard';
import { Route } from 'react-router-dom';
import AccountCreation from './Components/AccountCreation';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Characters from './React1/Characters';

const App = () => {
  return (
    <div>

      {/* <Route exact path='/' component={AccountCreation} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/owner-dashboard' component={OwnerDashBoard} /> */}
      <Characters />

    </div>
  );
};

export default App;
