import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPage.module.scss'
import { LoginLeftSide } from '../atoms'
import { LoginRightSide } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import { logout, logouting } from '../redux/actions/userActions'

const LoginPage = ({
  className=''
}) => {

  const dispatch = useDispatch()
  const logout_timer = 1800000 // 30 min

  const user = useSelector(state => state.user)

  const [status, setStatus] = useState('default')

  useEffect(() => {
    let timer

    const timerFunc = () => {
      timer = window.setTimeout(() => {
        if (user.status === 'logined') 
          dispatch(logouting())
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

  useEffect(() => {
    let timer
    if (user.status === 'logouting')  {
      timer = setTimeout(() => { 
        dispatch(logout())
      }, 1200)
    }
    return () => clearTimeout(timer)
  }, [dispatch, user])

  useEffect(() => {
    if (user.status === 'logouting')
      return setStatus('closing')
    if (user.status === 'logining')
      return setStatus('opening')
    if (user.status === 'logouted')
      return setStatus('close')
    if (user.status === 'logined')
      return setStatus('open')
  }, [user])

  return (
    <div className={classNames(className, styles.root, user.status === 'logined' && styles.unclickable)}>

      <LoginLeftSide status={status} />

      <LoginRightSide status={status} />

    </div>
  )
}

export default LoginPage
