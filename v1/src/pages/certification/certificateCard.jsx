import React, { useState } from "react";
import "./certificateCard.scss";

export default function certificateCard(props) {
  const { title, by, description, tools, link } = props.data;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [disp, setDisp] = useState(false);

  return (
    <div className="certificateCard">
      {/* <br /> */}
      <h2 className="header">
        <span className="title">{title}</span>
        <span
          className="cert-logo"
          onClick={() => {
            setDisp(!disp);
          }}
        >
          <i class="lni lni-certificate"></i>
        </span>
      </h2>
      <h4 className="desg">{by}</h4>
      <hr />
      <p className="desc"> {description} </p>
      <hr />
      {disp ? (
        <div>
          <iframe
            title="certificate"
            src={link}
            className="certificate"
            frameborder="0"
          ></iframe>
          <hr />
        </div>
      ) : undefined}
      <ul className="tools">
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}
