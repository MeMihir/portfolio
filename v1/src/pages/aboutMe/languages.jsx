import React from "react";
import "./languages.scss";

export default function Languages(props) {
  const { languages } = props;

  return (
    <ul class="Languages">
      {Object.keys(languages).map((lang) => (
        <li>
          {lang}
          <span>
            {[...Array(languages[lang])].map(() => (
              <i class="lni lni-star-filled"></i>
            ))}
            {[...Array(10 - languages[lang])].map(() => (
              <i class="lni lni-star"></i>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
