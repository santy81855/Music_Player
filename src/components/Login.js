import './Login.css';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import StatusBar from './StatusBar';

function Login(props){
    const {
      loginWithPopup, 
      // loginWithRedirect, 
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
        <div className="StatusBarProxy"/>
        <div className="Login">
          {/* Auth0 Authentication */}
          <h1>Aud.io Sign In:</h1>
      
          <button className = "loginButton" onClick={loginWithPopup}>Login</button>
        </div>
      </div>
}

export default Login;
