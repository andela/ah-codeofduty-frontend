const baseURL = 'https://ah-codeofduty-staging.herokuapp.com/api/';

export const urls = {
  ARTICLES: `${baseURL}articles/`,
  PROFILES: `${baseURL}profiles/`,
  FOLLOW: user => `${baseURL}profiles/${user}/follow`,
  USER_PROFILE: user => `${baseURL}profiles/${user}`,
  USER_FOLLOW: (user, follow) => `${baseURL}profiles/${user}/${follow}`,
  USER_ARTICLES: user => `${baseURL}profiles/${user}/articles`,
};

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
