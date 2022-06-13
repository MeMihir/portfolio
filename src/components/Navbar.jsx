import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const [disp, setDisp] = useState(false);

  if (disp)
    return (
      <div className="Navbar">
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/aboutme"
        >
          About Me
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/certifications"
        >
          Certifications
        </NavLink>
        <NavLink
          onClick={() => {
            setDisp(false);
          }}
          className="link"
          to="/research"
        >
          Research
        </NavLink>
        <i
          class="lni lni-chevron-up"
          onClick={() => {
            setDisp(false);
          }}
        ></i>
      </div>
    );
  else
    return (
      <div
        className="Navbar-hidden"
        onClick={() => {
          setDisp(true);
        }}
      >
        <i class="lni lni-chevron-down"></i>
      </div>
    );
}
