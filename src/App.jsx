import Intro from './pages/intro/Intro';
import AboutMe from './pages/aboutMe/aboutMe';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Intro /> */}
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
