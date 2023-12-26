import React from "react";
import { getLogos } from "../../utils";
import "./ExperienceCard.scss";

export default function internshipCard(props) {
  const { company, designation, duration, tools, detailed, links } = props.data;

  return (
    <div className="InternshipCard">
      {/* <br /> */}
      <h2 className="header">
        <span className="title">{company}</span>
        <span className="links">{links.map((link) => getLogos(link))}</span>
      </h2>
      <h4 className="desg"> {designation} <span className="duration"> {duration} </span> </h4>
      <hr />
      <ul className="details"> {detailed.map(detail => <li>{detail}</li> )} </ul>
      <hr />
      <ul className="tools">
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}
