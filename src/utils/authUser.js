export default () => {
  try {
    // eslint-disable-next-line
    return JSON.parse(localStorage.getItem('user')) || false;
  } catch (e) {
    return e;
  }
};
