import './App.css';
import React from 'react';
import StatusBar from './components/StatusBar';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  document.title="Aud.io"
  
  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated
  } = useAuth0();

  // need an icon
  return (
    <div className = "App">
      {/* This is the original app structure, now nested within components */}

      {/* <StatusBar/>
      {<div className = "App-NavBar-and-MainPage">
        <NavBar/>
          <div className = "App-MainPage-and-PlayBar">
            <MainPage/>
            <PlayBar/>
          </div>
      </div> */}
      
      {/* We are now nesting the above structure within the components. */}
      {/* Not ideal in my mind, but is the "best" way to cascade props between components */}
      
      <StatusBar/>
      <h1>Auth0 authentication</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login with popup</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
      <h3>User is { isAuthenticated ? "Logged in" : "Not logged in" }</h3>
      { isAuthenticated && (
      <pre style = {{textAlign: 'start'}}>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
