import React, { useEffect } from 'react'
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/actions/userActions'

const App = () => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {

    const handleWindowBeforeunload = () => {
      if(user.status === 'logining' || user.status === 'logouting') 
        dispatch(logout())
    }

    window.addEventListener('beforeunload', handleWindowBeforeunload)

    return () => window.removeEventListener('beforeunload', handleWindowBeforeunload)
  }, [user, dispatch])

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')} >
        ff
      </div>
    </>
  )
}

export default App
