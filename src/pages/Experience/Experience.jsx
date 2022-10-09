import React from "react";
import Card from "./ExperienceCard";
import data from "../../data/experience.json";
import "./Experience.scss";

export default function Internships() {
  return (
    <div>
      <div className="Internships">
        {data.map((internship) => (
          <Card data={internship} />
        ))}
      </div>
    </div>
  );
}
