import { LOGIN, LOGINING, LOGOUT, LOGOUTING } from '../types'

export const login = user_info => {

  const user = user_info

  return {
    type: LOGIN,
    data: {
      user
    }
  }
}

export const logining = () => {
  return {
    type: LOGINING
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const logouting = () => {
  return {
    type: LOGOUTING
  }
}