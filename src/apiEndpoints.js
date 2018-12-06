const baseURL = 'http://127.0.0.1:8000/api/';

export const urls = {
  ARTICLES: `${baseURL}articles/`,
  PROFILES: `${baseURL}profiles/`,
  FOLLOW: user => `${baseURL}profiles/${user}/follow`,
  USER_PROFILE: user => `${baseURL}profiles/${user}`,
  USER_FOLLOWERS: user => `${baseURL}profiles/${user}/followers`,
  USER_FOLLOWING: user => `${baseURL}profiles/${user}/following`,
  USER_ARTICLES: user => `${baseURL}profiles/${user}/articles`,
};

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
