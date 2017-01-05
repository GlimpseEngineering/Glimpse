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

export function followFoundUser(userId, followId, privacySetting) {
  // userId requests a follow of followId
  let followData = {};

  return (dispatch) => {
    axios.post(`api/users/${userId}/follows/${followId}`)
      .then((followRequest) => {
        followData.followedByUser = followRequest.data[0];
        return axios.get(`api/users/${followId}`)
      })
      .then((userRequest) => {
        followData.user = userRequest.data;
        if (privacySetting) {
          dispatch({ type: FOLLOW_FOUND_USER, payload: followData });
        } 
        else {
          return axios.put(`api/users/${userId}/follows/${followId}`);
        }
      })
      .then((acceptedUserRequest) => {
        if (acceptedUserRequest) {
          followData.followedByUser = acceptedUserRequest.data;
          dispatch({ type: FOLLOW_FOUND_USER, payload: followData });
        }
      })
      .catch((error) => {
        throw error;
      });
  };
};