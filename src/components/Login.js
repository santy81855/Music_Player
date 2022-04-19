import './Login.css';
import React, { useEffect } from 'react';
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

    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('')
    React.useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }, [])
    
    return (isAuthenticated === true) ?
      <div className = "App-NavBar-and-MainPage">
        <StatusBar curUser ={user} userLatitude={latitude} userLongitude = {longitude} />
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
