const getItem = (item) => {
  try {
    return JSON.parse(localStorage.getItem(item));
  } catch (e) {
    return 'null';
  }
};

export default getItem;
