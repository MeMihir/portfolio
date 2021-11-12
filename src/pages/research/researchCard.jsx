import React from "react";
import { getLogos } from "../../utils";
import "./researchCard.scss";

export default function researchCard(props) {
  const { title, status, journal, keywords, detailed, links } =
    props.data;

  return (
    <div className="ResearchCard">
      {/* <br /> */}
      <h2 className="header">
        <span className="title">{title}</span>
        <span className="links">{links.map((link) => getLogos(link))}</span>
      </h2>
      <h4 className="desg">
        {journal} <span className="duration"> {status} </span>{" "}
      </h4>
      <br />
      <hr />
      <p className="desc"> {detailed} </p>
      {/* <p className="details"> {} </p> */}

      <hr />
      <ul className="keywords">
        {keywords.map((keyword) => (
          <li>{keyword}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}
