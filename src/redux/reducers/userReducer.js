import { LOGIN, LOGINING, LOGOUT, LOGOUTING } from '../types'

const userReducer = (state = {status: 'logouted'}, action) => {
  switch(action.type) {
    case LOGINING: 
      return {...action.user, status: 'logining'}
    case LOGIN: 
      return action.data.user
    case LOGOUTING: 
      if (state.status !== 'logouted' || state.status !== 'logouting')
        return {...state, status: 'logouting'}
      else
        return state
    case LOGOUT: 
      return { status: 'logouted' }
    default: 
      return state
  }
}

export default userReducer