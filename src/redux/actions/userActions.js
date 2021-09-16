import { LOGIN, LOGOUT } from '../types'

export const login = user_info => async dispatch => {

  const user = user_info

  dispatch({
    type: LOGIN,
    data: {
      user
    }
  })
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}