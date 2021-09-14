import { TEST } from '../types'

const test = (state = null, action) => {
  switch(action.type) {
    case TEST: 
      return action.payload.test
    default: 
      return state
  }
}

export default test