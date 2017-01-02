import axios from 'axios';

export const GET_USERS_CACHE = 'GET_USERS_CACHE';

export function getCachedUsers(activeUser) {
  const request = axios.get(`api/cache/users`);

  return (dispatch) => {
    request
      .then((cachedUsers) => {
        console.log('Here is our users cache', cachedUsers);
        dispatch({ type: GET_USERS_CACHE, payload: cachedUsers})
      })
      .catch((error) => {
        throw error;
      });
  };
};
