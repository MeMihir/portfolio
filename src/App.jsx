import Background from './components/Background';
import Intro from './pages/intro/Intro';
import AboutMe from './pages/aboutMe/aboutMe';
import Projects from './pages/projects/Projects';
import Internships from './pages/internships/Internships';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        {/* <Intro /> */}
        {/* <AboutMe  /> */}
        {/* <Projects /> */}
        <Internships />
      </header>
    </div>
  );
}

export default App;
