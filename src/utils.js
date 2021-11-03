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
        <img src="./colab.png" alt="colab" className="colabImg" />
      </a>
    );
  else if (link.indexOf("netlify") !== -1 || link.indexOf("heroku") !== -1)
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-website"></i>
      </a>
    );
  else
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <i class="lni lni-link"></i>
      </a>
    );
};