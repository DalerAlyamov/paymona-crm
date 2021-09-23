import { CLOSE_POPUP, OPEN_POPUP } from '../types'

export const openPopup = (content, minWidth, minHeight) => {
  return {
    type: OPEN_POPUP,
    payload: {
      content,
      minWidth: minWidth || 300,
      minHeight: minHeight || 200
    }
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}