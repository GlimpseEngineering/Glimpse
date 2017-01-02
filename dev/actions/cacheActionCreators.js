import axios from 'axios';

export const GENERATE_CACHE = 'GENERATE_CACHE';
export const GET_CACHED_USERS = 'GET_CACHED_USERS';

export function getCachedUsers() {
  const request = axios.get(`api/cache/users`);

  return (dispatch) => {
    request
      .then((cachedUsers) => {
        dispatch({ type: GET_CACHED_USERS, payload: cachedUsers})
      })
      .catch((error) => {
        throw error;
      });
  };
};

export function generateCache(activeUser) {
  const request = axios.get(`api/cache/users/${activeUser}`);

  return (dispatch) => {
    request
      .then((cache) => {
        dispatch({ type: GENERATE_CACHE, payload: true })
      })
      .catch((error) => {
        throw error;
      });
  };
};
