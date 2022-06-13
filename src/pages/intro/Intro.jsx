import React from "react";
import { Link } from 'react-router-dom'
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro-wrap">
      <div className="Intro">
        <div className="info">
          <h2>Hey, I am</h2>
          <h1>Mihir Pavuskar</h1>
          <h3>Data Scientist and Machine Learning Engineer</h3>
        </div>
        <div className="image">
          <img src="./profile.jpg" alt="profile" srcset="" />
        </div>
      </div>
			<div className="Main-navigation" >
				<Link to="/aboutme" className="button" >About Me</Link>
				<Link to="/education" className="button" >Education</Link>
				<Link to="/experience" className="button" >Experience</Link>
				<Link to="/projects" className="button" >Projects</Link>
				<Link to="/certifications" className="button" >Certifications</Link>
				<Link to="/research" className="button" >Research</Link>
				<Link to="/extra" className="button" >Extra Curricular</Link>
			</div>
    </div>
  );
}
