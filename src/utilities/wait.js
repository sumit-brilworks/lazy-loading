export const wait = (time) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
};
