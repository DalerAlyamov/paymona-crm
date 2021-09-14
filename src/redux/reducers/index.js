import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import testReducer from './testReducer'

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
  test: testReducer
})

const presistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  allReducers,
  presistedState,
  composeEnhancers(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage({
  test: store.getState().test
}))

export default store