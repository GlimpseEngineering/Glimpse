import axios from 'axios';

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SEARCH_USERS = 'SEARCH_USERS';
export const FOLLOW_FOUND_USER = 'FOLLOW_FOUND_USER';

export function searchUser(searchterm, UserId) {
  const request = axios.get(`api/search/users/${UserId}/${searchterm}`);

  return (dispatch) => {
    request
      .then((foundUsers) => {
        dispatch({ type: SEARCH_USERS, payload: foundUsers.data });
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

export function followFoundUser(userId, followId) {
  const request = axios.post(`api/users/${userId}/follows/${followId}`);

  return (dispatch) => {
    request
      .then((followRequest) => {
        console.log('Here is our request to follow an individual', followRequest.data[0]);
        dispatch({ type: FOLLOW_FOUND_USER, payload: followRequest.data[0] });
      })
      .catch((error) => {
        throw error;
      });
  };
};