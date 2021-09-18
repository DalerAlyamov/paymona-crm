import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './userReducer'
import popupReducer from './popupReducer'

const middleware = [thunk]

const localStorageItemName = 'paymona-bi-state'

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(localStorageItemName, serializedState)
  } catch (e) {
    console.log(e) 
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageItemName)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const allReducers = combineReducers({
  user: userReducer,
  popup: popupReducer
})

const presistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  allReducers,
  presistedState,
  composeEnhancers(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage({
  user: store.getState().user
}))

export default store