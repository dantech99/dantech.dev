export const EMAIL = "dandevtech99@gmail.com";

export const mailto = (subject = "Proyecto web") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
