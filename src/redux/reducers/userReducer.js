import { LOGIN, LOGOUT } from '../types'

const userReducer = (state = {status: 'logouted'}, action) => {
  switch(action.type) {
    case LOGIN: 
      return action.data.user
    case LOGOUT: 
      return {status: 'logouted'}
    default: 
      return state
  }
}

export default userReducer