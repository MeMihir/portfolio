export const COLOR_SCHEME = "teal";

export const ROLES = {
  soft: "Software Developer",
  data: "Data Scientist",
  aiml: "AI/ML Engineer",
  rest: "Miscellaneous",
};

export const CATEGORIES = {
  aiml: "AI/ML Engineering",
  soft: "Software Development",
  data: "Data Science",
  rest: "Miscellaneous",
};

export const GAEvent = (action, params) => {
  if (typeof window.gtag === 'function') {
    window.gtag("event", action, params);
  }
}