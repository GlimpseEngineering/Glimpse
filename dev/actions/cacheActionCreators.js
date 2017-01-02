import axios from 'axios';

export const CACHE_USERS = 'CACHE_USERS';

export function getCachedUsers(searchterm, UserId) {
  const request = axios.get('api/cache/users');

  return (dispatch) => {
    request
      .then((cachedUsers) => {
        /**
         * hit the redis user route and get users
         * assign each user to a storage object where the key is the UserId
         * once in reducer, store storage object containing users on state
         * lookups will be in constant time since stored in object
         */
        let storage = {};
        cachedUsers.data.map(user => {
          storage[user.id] = user;
        })
        console.log('Here is our storage of users', storage);
        dispatch({ type: CACHE_USERS, payload: storage})
      })
      .catch((error) => {
        throw error;
      });
  };
};
