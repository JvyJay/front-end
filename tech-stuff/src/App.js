import React from 'react';
import SellerDashboard from './Components/SellerDashboard';
import { Route } from 'react-router-dom';
import AccountCreation from './Components/AccountCreation';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Cards from './Components/Cards';
import NavbarTing from './Components/NavbarTing';
import GuestDashboard from './Components/GuestDashboard';


const App = () => {
  return (
    <div style={{
      backgroundColor: '#f5fcfd',
       
      }}>
      <NavbarTing />
      <Route exact path='/' component={AccountCreation} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/owner-dashboard/:id' component={SellerDashboard} />
      <Route path='/tech/:id' component={Cards} />
      <Route path='/all/tech' component={GuestDashboard} />
    </div>
  );
};

export default App;
