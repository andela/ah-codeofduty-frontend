const baseURL = "https://ah-codeofduty-staging.herokuapp.com/api/";

const articles = `${baseURL}articles/`;
const userArticles = user => `${baseURL}profiles/${user}/articles`;

export const urls = {
  ARTICLES: articles,
  PROFILES: `${baseURL}profiles/`,
  TAGS: `${baseURL}tags/`,
  
  SIGNUP: `${baseURL}users/`,
  LOGIN: `${baseURL}users/login/`,

  ARTICLE: slug => `${articles}${slug}/`,
<<<<<<< HEAD
  ARTICLES_PAGINATE: (limit, offset) =>
    `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) =>
    `${userArticles(user)}?limit=${limit}&offset=${offset}`,
=======
  ARTICLES_PAGINATE: (limit, offset) => `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) => `${userArticles(user)}?limit=${limit}&offset=${offset}`,
>>>>>>> (Feature #161255325): Tags should be present in relevant views

  FILTER_BY_TAGS: tag => `${baseURL}articles/?tag=${tag}`,

  FOLLOW: user => `${baseURL}profiles/${user}/follow`,
  USER_PROFILE: user => `${baseURL}profiles/${user}`,
  USER_FOLLOW: (user, follow) => `${baseURL}profiles/${user}/${follow}`,
  USER_ARTICLES: user => userArticles(user)
};

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});
