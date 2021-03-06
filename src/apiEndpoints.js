const baseURL = 'https://ah-codeofduty-staging.herokuapp.com/api/';

const articles = `${baseURL}articles/`;
const userArticles = user => `${baseURL}profiles/${user}/articles`;

export const urls = {
  ARTICLES: articles,
  RECENT_ARTICLES: `${articles}recent/`,
  POPULAR_ARTICLES: `${articles}popular/`,
  PROFILES: `${baseURL}profiles/`,
  TAGS: `${baseURL}tags/`,

  SIGNUP: `${baseURL}users/`,
  LOGIN: `${baseURL}users/login/`,

  ARTICLE: slug => `${articles}${slug}/`,

  ARTICLES_PAGINATE: (limit, offset) => `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) => `${userArticles(user)}?limit=${limit}&offset=${offset}`,

  FILTER_BY_TAGS: tag => `${baseURL}articles/?tag=${tag}`,

  FOLLOW: user => `${baseURL}profiles/${user}/follow`,
  USER_PROFILE: user => `${baseURL}profiles/${user}`,
  USER_FOLLOW: (user, follow) => `${baseURL}profiles/${user}/${follow}`,
  USER_ARTICLES: user => userArticles(user),
  DISLIKE: slug => `${baseURL}articles/${slug}/like/`,
  REPORT_ARTICLE: slug => `${baseURL}articles/${slug}/report/`,
};

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
