export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function login() {
  const lock = new Auth0Lock('7YhgDoHIuZpKxGRa0A81rjDh1JuXd5vD', 'glimpse.auth0.com')
  return dispatch => {
    lock.show((error, profile, token) => {
      if(error) {
        return dispatch(loginError(error))
      }
      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)
      return dispatch(loginSuccess(profile))
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}