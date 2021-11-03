import Intro from './pages/intro/Intro';
import AboutMe from './pages/aboutMe/aboutMe';
import Projects from './pages/projects/Projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Intro /> */}
        {/* <AboutMe  /> */}
        <Projects />
      </header>
    </div>
  );
}

export default App;
