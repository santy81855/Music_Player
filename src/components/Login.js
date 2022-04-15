import './Login.css';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import userbase from '../databases/users.json';
import NavBar from './NavBar';
import StatusBar from './StatusBar';

//class Login extends React.Component {
function Login(props){
  //render() {
    const {
      loginWithPopup, 
      loginWithRedirect, 
      logout, 
      user, 
      isAuthenticated
    } = useAuth0();

    if(isAuthenticated == true){
      console.log(user.given_name)
    }else{
      console.log("not");
    }

    return (isAuthenticated == true) ?
      <div className = "App-NavBar-and-MainPage">
        <StatusBar logoutFunction = {logout} />
      </div>
    :
      <div>
        <div className="Login">
          Login Page
          <h1>Auth0 authentication</h1>
      
          <button onClick={loginWithPopup}>Login with popup</button>
        
          <button onClick={logout}>Guest</button>
        
      <h3>User is { isAuthenticated ? "Logged in" : "Not logged in" }</h3>
      { isAuthenticated && (
      <pre style = {{textAlign: 'start'}}>{JSON.stringify(user, null, 2)}</pre>
      )}
        </div>
      </div>

  //}
}

export default Login;
