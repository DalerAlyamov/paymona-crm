import React from 'react'
import { LoginPage, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees } from './routes'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <LoginPage />
      {user.status !== 'logouted' &&
        <div className='App'>
          <SideBar />
          <Employees />
        </div>
      }
    </>
  )
}

export default App
