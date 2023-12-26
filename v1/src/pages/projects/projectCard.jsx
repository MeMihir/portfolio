import React from "react";
import { getLogos } from "../../utils";
import "./projectCard.scss";

export default function projectCard(props) {
  const { title, description, tools, detailed, links } = props.data;

  return (
    <div className="ProjectCard">
      {/* <br /> */}
      <h2 className="header">
        <span className="title">{title}</span>
        <span className="links">{links.map((link) => getLogos(link))}</span>
      </h2>
      <hr />
      <p className="desc"> {description} </p>
      <p className="details"> {detailed} </p>
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
