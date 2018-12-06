export default () => {
  try {
    // eslint-disable-next-line
    return JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    return null;
  }
};
