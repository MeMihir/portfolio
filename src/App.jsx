import Background from './components/Background';
import Intro from './pages/intro/Intro';
import AboutMe from './pages/aboutMe/aboutMe';
import Projects from './pages/projects/Projects';
import Internships from './pages/internships/Internships';
import Certifications from './pages/certification/certifications';
import Research from './pages/research/research';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
