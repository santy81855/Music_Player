import './App.css';
import React from 'react';
import StatusBar from './components/StatusBar';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import PlayBar from './components/PlayBar';

// export const PageContext = React.createContext(0);

function App() {
  return (
    <div className = "App">

      <StatusBar/>
      <div className = "App-NavBar-and-MainPage">
        <NavBar/>
          <div className = "App-MainPage-and-PlayBar">
            <MainPage/>
            <PlayBar/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
