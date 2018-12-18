const baseURL = "https://ah-codeofduty-staging.herokuapp.com/api/";

const articles = `${baseURL}articles/`;
const userArticles = user => `${baseURL}profiles/${user}/articles`;

export const urls = {
  ARTICLES: articles,
  PROFILES: `${baseURL}profiles/`,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  TAGS: `${baseURL}tags/`,
<<<<<<< HEAD
>>>>>>> (Feature #161255325): Add tagging on all relevant views:
=======
  
  SIGNUP: `${baseURL}users/`,
  LOGIN: `${baseURL}users/login/`,
>>>>>>> (Feature #161255325): Tags should be present in relevant views

  ARTICLE: slug => `${articles}${slug}/`,
<<<<<<< HEAD
  ARTICLES_PAGINATE: (limit, offset) =>
    `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) =>
    `${userArticles(user)}?limit=${limit}&offset=${offset}`,
=======
<<<<<<< HEAD
  TAGS: `${baseURL}tags/`,

  FILTER_BY_TAGS: tag => `${baseURL}/articles/?tags=${tag}`,
>>>>>>> (Feature #161255325): Add tagging on all relevant views:
=======
  ARTICLES_PAGINATE: (limit, offset) => `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) => `${userArticles(user)}?limit=${limit}&offset=${offset}`,
>>>>>>> (Feature #161255325): Tags should be present in relevant views
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
