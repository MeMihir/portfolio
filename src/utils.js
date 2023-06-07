export const getLogos = (link) => {
  if (link.indexOf("github") !== -1)
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-github-original"></i>
      </a>
    );
  else if (link.indexOf("colab") !== -1)
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img src="./logos/colab.png" alt="colab" className="colabImg" />
      </a>
    );
  else if (link.indexOf("netlify") !== -1 || link.indexOf("heroku") !== -1)
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-website"></i>
      </a>
    );
  else if (link.indexOf("linkedin") !== -1) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-linkedin-original"></i>
      </a>
    );
  } else if (link.indexOf("instagram") !== -1) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-instagram-original"></i>
      </a>
    );
  } else if (link.indexOf("facebook") !== -1) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-facebook-original"></i>
      </a>
    );
  } else if (link.indexOf("kaggle") !== -1) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        Kaggle
      </a>
    );
  } if (link.indexOf("Resume") !== -1) {
    return (
      <a href={link} target="_blank" rel="noreferrer" download>
        Resume
      </a>
    );
  } else
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-link"></i>
      </a>
    );
};
