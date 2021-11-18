import React from "react";
import "./educationCard.scss";

export default function educationCard(props) {
  const { institution, level, location, from, to, grading, grade, logo } = props.data;

  return (
    <div className="EducationCard">
      {/* <br /> */}
      <h2 className="header">
        <span className="title">{level}</span>
      </h2>
      <hr />
      <img className="logo" src={`./logos/${logo}.png`} alt={logo} />
      <br />
			<h4 className="desg">
        {institution} 
      </h4>
      <h4 className="desg" >{location}</h4>
      <h4 className="desg">
        {grading} - {grade}
      </h4>
			<h4 className="desg" >{from}-{to}</h4>
      <hr />
			<br />
    </div>
  );
}
