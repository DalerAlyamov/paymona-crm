import { OPEN_POPUP, CLOSE_POPUP } from '../types'

const popupReducer = (state = { active: false, content: null, minWidth: 0, minHeight: 0 }, action) => {
  switch(action.type) {
    case OPEN_POPUP: 
      return {
        active: true,
        content: action.payload.content,
        minWidth: action.payload.minWidth,
        minHeight: action.payload.minHeight
      }
    case CLOSE_POPUP: 
      return {
        ...state,
        active: false,
        content: null
      }
    default: 
      return state
  }
}

export default popupReducer