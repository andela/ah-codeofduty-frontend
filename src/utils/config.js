export const STAGING_URL = 'https://ah-codeofduty-staging.herokuapp.com/api';
export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
