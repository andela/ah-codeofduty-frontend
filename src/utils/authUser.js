const authUser = () => {
  try {
    // eslint-disable-next-line
    return JSON.parse(localStorage.getItem('user')) || false;
  } catch (e) {
    return e;
  }
};

export const getUserData = (provider, access_token) => ({provider, access_token});

export default authUser;
