import './App.css';
import React from 'react';
import StatusBar from './components/StatusBar';
// import NavBar from './components/NavBar';
// import MainPage from './components/MainPage';
// import PlayBar from './components/PlayBar';

// export const PageContext = React.createContext(0);

function App() {
  return (
    <div className = "App">

      {/* This is the original app structure, now nested within components */}
      {/* <StatusBar/> */}
      {/* <div className = "App-NavBar-and-MainPage"> */}
        {/* <NavBar/> */}
          {/* <div className = "App-MainPage-and-PlayBar"> */}
            {/* <MainPage/> */}
            {/* <PlayBar/> */}
          {/* </div> */}
      {/* </div> */}
      
      {/* We are now nesting the above structure within the components. */}
      {/* Not ideal in my mind, but is the "best" way to cascade props between components */}
      
      <StatusBar/>
      
    </div>
  );
}

export default App;
