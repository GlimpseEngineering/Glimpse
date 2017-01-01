import axios from 'axios';

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SEARCH_USERS = 'SEARCH_USERS';

export function searchUser(searchterm) {
  const request = axios.get(`api/search/users/${searchterm}`);

  return (dispatch) => {
    request
      .then((foundUsers) => {
        dispatch({ type: SEARCH_USERS, payload: foundUsers.data})
      })
      .catch((error) => {
        throw error;
      });
  };
};

export function clearSearch() {
  return (dispatch) => {
    dispatch({ type: CLEAR_SEARCH });
  };
};