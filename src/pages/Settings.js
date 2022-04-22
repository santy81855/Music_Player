import React from 'react';
import './Settings.css';
import {useAuth0} from '@auth0/auth0-react';

//class Settings extends Component {
  //render() {
function Settings(props) {
  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated
  } = useAuth0();  

  return (
      <div className="Settings">
        {/* MainPage */}
        <button className = "logout" onClick={logout} onMouseEnter={console.log("pwease dont leave 😢")}>Logout</button>   
      </div>
  );
}
//}

export default Settings;