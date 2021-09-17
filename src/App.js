import React from 'react'
import classNames from 'classnames'
import { LoginPage, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees } from './routes'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        <SideBar />
        <Employees />
      </div>
    </>
  )
}

export default App
