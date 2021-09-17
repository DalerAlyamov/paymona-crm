import React from 'react'
import { LoginPage, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees } from './routes'
import { Route } from 'react-router-dom'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
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
