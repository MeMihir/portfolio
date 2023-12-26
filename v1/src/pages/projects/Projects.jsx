import React from "react";
import Card from "./projectCard";
import "./projects.scss";
import data from "../../data/projects.json";

export default function Projects() {
  return (
    <div className="Projects">
      {data.map((project) => (
        <Card data={project} />
      ))}
    </div>
  );
}
