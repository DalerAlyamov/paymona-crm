import { ROUTER_PUSH, ROUTER_REPLACE, ROUTER_GO_BACK, ROUTER_GO_FORWARD } from '../types'

const initialState = {
  routeStory: ['', '/users', '/users/daler', '/users/daler/playlist'],
  prevRoute: '/users/daler',
  currentRoute: '/users/daler/playlist',
  nextRoute: null
}

const routerReducer = (state = initialState, action) => {

  let tmpRouterState, prev__route, current__route

  switch(action.type) {


    case ROUTER_PUSH: 
      tmpRouterState = Object.assign(state)
      prev__route = tmpRouterState.currentRoute
      current__route = tmpRouterState.currentRoute + '/' + action.payload.path

      var index = tmpRouterState.routeStory.indexOf(tmpRouterState.nextRoute)

      if (index !== -1)
        tmpRouterState.routeStory[index] = current__route

      else
        tmpRouterState.routeStory.push(current__route)

      return {
        ...tmpRouterState,
        prevRoute: prev__route,
        currentRoute:current__route,
        nextRoute: null
      }


    case ROUTER_REPLACE: 
      tmpRouterState = Object.assign(state)
      prev__route = tmpRouterState.currentRoute
      current__route = '/' + action.payload.path
      tmpRouterState.routeStory.push(current__route)
      return {
        ...tmpRouterState,
        prevRoute: prev__route,
        currentRoute: current__route,
        nextRoute: null
      }


    case ROUTER_GO_BACK: 
      tmpRouterState = Object.assign(state)
      
      if (tmpRouterState.prevRoute === null) return state

      tmpRouterState.nextRoute = tmpRouterState.currentRoute

      tmpRouterState.currentRoute = tmpRouterState.prevRoute

      tmpRouterState.routeStory.every((_route, index, array) => {
        if (_route === tmpRouterState.prevRoute) {
          if (array[index - 1] !== undefined)  
            tmpRouterState.prevRoute = array[index - 1]
          else
            tmpRouterState.prevRoute = null
          return false
        }
        return true
      })
      
      return {...tmpRouterState}


    case ROUTER_GO_FORWARD:
      tmpRouterState = Object.assign(state)
      
      if (tmpRouterState.nextRoute === null) return state

      tmpRouterState.prevRoute = tmpRouterState.currentRoute

      tmpRouterState.currentRoute = tmpRouterState.nextRoute

      tmpRouterState.routeStory.every((_route, index, array) => {
        if (_route === tmpRouterState.nextRoute) {
          if (array[index + 1] !== undefined)
            tmpRouterState.nextRoute = array[index + 1]
          else
            tmpRouterState.nextRoute = null
          return false
        }
        return true
      })
      
      return {...tmpRouterState}
      

    default: 
      return state
  }
}

export default routerReducer