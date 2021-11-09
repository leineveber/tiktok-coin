export const getOnline = async () =>
  new Promise((res) => {
    setTimeout(() => {
      res(720);
    }, 1000);
  });
