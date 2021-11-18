import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const [disp, setDisp] = useState(false);

  if (disp)
    return (
      <div className="Navbar">
				<NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/aboutme">
          About Me
        </NavLink>
        <NavLink className="link" to="/education">
          Education
        </NavLink>
        <NavLink className="link" to="/internships">
          Internships
        </NavLink>
        <NavLink className="link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="link" to="/certifications">
          Certifications
        </NavLink>
        <NavLink className="link" to="/research">
          Research
        </NavLink>
        <i class="lni lni-chevron-up" onClick={() => {setDisp(false)}} ></i>
      </div>
    );
  else
    return (
      <div className="Navbar-hidden" onClick={() => {setDisp(true)}} >
        <i class="lni lni-chevron-down"></i>
      </div>
    );
}
