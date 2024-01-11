import React from "react";
import Skills from "./skills";
import Languages from "./languages";
import { getLogos } from "../../utils";
import data from "../../data/aboutme.json";
import "./aboutMe.scss";

export default function aboutMe() {
  const { bio, links, skills, languages, hobbies } = data;

  return (
    <div className="aboutMe">
      <div className="bio">{bio}</div>
      <div className="profile">
        {/* <img src="profile.jpg" alt="profile" /> */}
      </div>
      <div className="links">{links.map((link) => getLogos(link))}</div>
      <div className="skills">
        <Skills skills={skills} />
      </div>
      <div className="languages">
        <h3>Languages</h3>
        <Languages languages={languages} />
      </div>
      <div className="hobbies">
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
