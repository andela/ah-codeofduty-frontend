const baseURL = "http://127.0.0.1:8000/api/";

const articles = `${baseURL}articles/`;
const userArticles = user => `${baseURL}profiles/${user}/articles`;

export const urls = {
  ARTICLES: articles,
  RECENT_ARTICLES: `${articles}recent/`,
  POPULAR_ARTICLES: `${articles}popular/`,
  PROFILES: `${baseURL}profiles/`,

  ARTICLE: slug => `${articles}${slug}/`,
  ARTICLES_PAGINATE: (limit, offset) => `${articles}?limit=${limit}&offset=${offset}`,
  USER_ARTICLES_PAGINATE: (limit, offset, user) => `${userArticles(user)}?limit=${limit}&offset=${offset}`,


  FOLLOW: user => `${baseURL}profiles/${user}/follow`,
  USER_PROFILE: user => `${baseURL}profiles/${user}`,
  USER_FOLLOW: (user, follow) => `${baseURL}profiles/${user}/${follow}`,
  USER_ARTICLES: user => userArticles(user),
  DISLIKE:(slug) => `${baseURL}articles/${slug}/like/`,
};

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});
