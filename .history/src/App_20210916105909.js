import React from 'react'
<<<<<<< HEAD
import SideBar from '../src/orgamisms/SideBar'
=======
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

>>>>>>> 76b26a7d512f22221f3f94be2b4a7840d48ce916
const App = () => {

  const user = useSelector(state => state.user)

  return (
<<<<<<< HEAD
    <div className='App'>
      <SideBar/>
    </div>
=======
    <>
      <LoginPage isLogged={!user} />
      <div className={classNames('App', !user && 'App--close')}>
        
      </div>
    </>
>>>>>>> 76b26a7d512f22221f3f94be2b4a7840d48ce916
  )
}

export default App
