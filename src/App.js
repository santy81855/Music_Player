import './App.css';
import React from 'react';
import Login from './components/Login';
// import StatusBar from './components/StatusBar';
// import {useAuth0} from '@auth0/auth0-react';
// import userbase from './databases/users.json';

// function writeUser(user){
// }

function App() {
  document.title="Aud.io"

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
      <Login />
    </div>
  );
}

export default App;
