import { TEST_TYPE } from '../types'

export const initActiveEmployees = test => async dispatch => {
  dispatch({
    type: TEST_TYPE,
    payload: {
      test
    }
  })
}