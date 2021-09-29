import React from "react";
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
				<div className="button"><span>About Me</span></div>
				<div className="button"><span>Education</span></div>
				<div className="button"><span>Internships</span></div>
				<div className="button"><span>Projects</span></div>
				<div className="button"><span>Certifications</span></div>
				<div className="button"><span>Research</span></div>
				<div className="button"><span>Extra Curricular</span></div>
			</div>
    </div>
  );
}
