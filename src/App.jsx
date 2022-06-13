import Background from './components/Background';
import Navbar from './components/Navbar';
import Intro from './pages/intro/Intro';
import AboutMe from './pages/aboutMe/aboutMe';
import Projects from './pages/projects/Projects';
import Internships from './pages/internships/Internships';
import Certifications from './pages/certification/certifications';
import Research from './pages/research/research';
import Education from './pages/education/education';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Internships />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
