export const colorRandomizer = () => {
  const colorNumber = Math.floor(Math.random() * 7 + 1);

  return `--theme-${colorNumber}`;
};
