import { TEST_TYPE } from '../types'

const test = (state = null, action) => {
  switch(action.type) {
    case TEST_TYPE: 
      return action.payload.test
    default: 
      return state
  }
}

export default test