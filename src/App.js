// import logo from './logo.svg';
import './App.css';
import StatusBar from './components/StatusBar';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import PlayBar from './components/PlayBar';

function App() {
  return (
    <div className = "App">
      {/* App Layout */}
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
