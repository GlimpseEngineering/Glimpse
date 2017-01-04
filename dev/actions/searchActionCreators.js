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
  let followData = {};

  return (dispatch) => {
    console.log('here is the privacy setting of the user being follow', privacySetting);
    axios.post(`api/users/${userId}/follows/${followId}`)
      .then((followRequest) => {
        followData.followedByUser = followRequest.data[0];
        return axios.get(`api/users/${followId}`)
      })
      .then((userRequest) => {
        console.log('Here is the userRequest', userRequest);
        followData.user = userRequest.data;
        if (privacySetting) {
          dispatch({ type: FOLLOW_FOUND_USER, payload: followData });
        } 
        else {
          console.log('Public user trying to accept follow request')
          return axios.put(`api/users/${userId}/follows/${followId}`);
        }
      })
      .then((acceptedUserRequest) => {
        if (acceptedUserRequest) {
          followData.followedByUser.status = 'accepted';
          console.log('Here is the acceptedUserRequest', acceptedUserRequest);
          console.log('Here is the followData', followData);
          dispatch({ type: FOLLOW_FOUND_USER, payload: followData });
        }
      })
      .catch((error) => {
        throw error;
      });
  };
};