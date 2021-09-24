import { LOGIN, LOGINING, LOGOUT, LOGOUTING } from '../types'

const userReducer = (state = {status: 'logouted'}, action) => {
  switch(action.type) {
    case LOGINING: 
      return {...state, status: 'logining'}
    case LOGIN: 
      return action.data.user
    case LOGOUTING: 
      return {...state, status: 'logouting'}
    case LOGOUT: 
      return {status: 'logouted'}
    default: 
      return state
  }
}

export default userReducer