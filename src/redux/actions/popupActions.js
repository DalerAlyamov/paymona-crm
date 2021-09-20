import { CLOSE_POPUP, OPEN_POPUP } from '../types'

export const openPopup = (content, minWidth=300, minHeight=200) => {
  return {
    type: OPEN_POPUP,
    payload: {
      content,
      minWidth,
      minHeight
    }
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}