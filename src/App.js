import React, { useEffect } from 'react'
import classNames from 'classnames'
import { LoginPage } from './organisms'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/actions/userActions'

const App = () => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const logout_timer = 1800000 // 30 min

  useEffect(() => {
    let timer

    const timerFunc = () => {
      timer = window.setTimeout(() => {
        if (user.status === 'logined') {
          dispatch(login({ ...user, status: 'logouting' }))
          window.setTimeout(() => {
            if (user.status === 'logouting')
              dispatch(logout())
          }, 1200)
        }
      }, logout_timer)
    }

    if (user.status === 'logined')
      timerFunc()

    window.addEventListener('click', () => {
      clearTimeout(timer)
      timerFunc()
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('click', () => {
        clearTimeout(timer)
        timerFunc()
      })
    }
  }, [user, dispatch])

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
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        
      </div>
    </>
  )
}

export default App
