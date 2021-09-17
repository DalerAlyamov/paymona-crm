import React from 'react'
import classNames from 'classnames'
import { LoginPage, SideBar } from './organisms'
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        <SideBar />
      </div>
    </>
  )
}

export default App
