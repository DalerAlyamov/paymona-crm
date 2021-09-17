import { ROUTER_GO_BACK, ROUTER_GO_FORWARD, ROUTER_PUSH, ROUTER_REPLACE } from '../types'

export const routerPush = initial_path => {

  let path = initial_path.replace('//', '/')
  
  if (path[0] === '/')
    path = path.slice(1)

  return {
    type: ROUTER_PUSH,
    payload: {
      path
    }
  }
}

export const routerReplace = initial_path => {

  let path = initial_path.replace('//', '/')
  
  if (path[0] === '/')
    path = path.slice(1)
    
  return {
    type: ROUTER_REPLACE,
    payload: {
      path
    }
  }
}

export const routerGoBack = () =>{
  return {
    type: ROUTER_GO_BACK
  }
}

export const routerGoForward = () =>{
  return {
    type: ROUTER_GO_FORWARD
  }
}