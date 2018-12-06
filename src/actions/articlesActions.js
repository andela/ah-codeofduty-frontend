export const ActionTypes = {
  ARTICLES_FETCH: 'ARTICLES_FETCH',
  ARTICLES_FETCHED: 'ARTICLES_FETCHED',
};

const articlesFetch = () => ({
  type: ActionTypes.ARTICLES_FETCH,
  isLoading: true,
});

const articlesFetched = articles => ({
  type: ActionTypes.ARTICLES_FETCHED,
  isLoading: false,
  articles,
});

export const getArticles = url => (dispatch) => {
  dispatch(articlesFetch());
  return fetch(url)
    .then(response => response.json())
    .then(articles => dispatch(articlesFetched(articles)))
    .catch(error => console.log(error));
};
