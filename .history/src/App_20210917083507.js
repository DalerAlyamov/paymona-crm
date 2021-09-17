import React from 'react'
import SideBar from '../src/organisms/SideBar'
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import Emplyee from './routes/Emplyee'
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      {/* <LoginPage isLogged={!user} /> */}
      <div className={classNames('App', user && 'App--close')}>
        <SideBar/>
        <Emplyee/>
      </div>
    </>
  )
}

export default App
