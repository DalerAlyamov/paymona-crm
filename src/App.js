import React, { useEffect } from 'react'
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './redux/actions/userActions'

const App = () => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {

    const handleWindowBeforeunload = () => {
      alert('hi')
      if(user.status === 'logining') 
        dispatch(logout())  
    }

    window.addEventListener('beforeunload', handleWindowBeforeunload)

    return () => window.removeEventListener('beforeunload', handleWindowBeforeunload)
  }, [user, dispatch])

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        
      </div>
    </>
  )
}

export default App
