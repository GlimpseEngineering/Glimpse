import axios from 'axios';

export const SEARCH_USERS = 'SEARCH_USERS';

export function searchUser(searchterm) {
  const request = axios.get(`api/search/users/${searchterm}`);

  return (dispatch) => {
    request
      .then((data) => {
        console.log('In the searchUser action creator with data:', data.data);
        dispatch({ type: SEARCH_USERS, payload: data.data})
      })
      .catch((error) => {
        throw error;
      })
  };
};