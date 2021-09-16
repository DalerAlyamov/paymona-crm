import React from 'react'
import SideBar from '../src/orgamisms/SideBar'
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <LoginPage isLogged={!user} />
      <div className={classNames('App', !user && 'App--close')}>
        
      </div>
    </>
  )
}

export default App
