export const hashtags = (text) => {
  const found = text.match(/(#\w+)/g);
  return found;
};
