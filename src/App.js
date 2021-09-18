import React from 'react'
import classNames from 'classnames'
import { LoginPage, Popup, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees } from './routes'
import { Route } from 'react-router-dom'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      {/* <LoginPage isLogged={!user} /> */}
      <div className={classNames('App', user==='logouted' && 'App--close')}>
        <SideBar/>
        <Emplyee/>
      </div>
      <Popup />
      <LoginPage />
      {user.status !== 'logouted' &&
        <div className='App'>
          <SideBar />
          <Route path='/employees' component={Employees} />
        </div>
      }
    </>
  )
}

export default App
