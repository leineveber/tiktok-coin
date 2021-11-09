export const getUser = async () =>
  new Promise((res) => {
    setTimeout(() => {
      res({
        username: 'username',
        balance: '1',
      });
    }, 1000);
  });
