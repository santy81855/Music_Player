import './Login.css';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import StatusBar from './StatusBar';

function Login(props){
    const {
      loginWithPopup, 
      loginWithRedirect, 
      logout, 
      user, 
      isAuthenticated
    } = useAuth0();
    
    return (isAuthenticated === true) ?
      <div className = "App-NavBar-and-MainPage">
        <StatusBar curUser ={user}/>
      </div>
    :
      <div>
        <div className="Login">
          Login Page
          <h1>Auth0 authentication</h1>
      
          <button onClick={loginWithPopup}>Login with popup</button>
        
          <button onClick={logout}>Guest</button>
        </div>
      </div>
}

export default Login;
