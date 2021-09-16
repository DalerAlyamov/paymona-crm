import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPage.module.scss'
import { LoginLeftSide } from '../atoms'
import { LoginRightSide } from './'
import { useSelector } from 'react-redux'

const LoginPage = ({
  className=''
}) => {

  const user = useSelector(state => state.user)

  const [status, setStatus] = useState('default')

  useEffect(() => {
    if (user === 'unlogining')
      return setStatus('close')
    if (user)
      return setStatus('open')
    if (!user)
      return setStatus('default')
  }, [user])

  return (
    <div className={classNames(className, styles.root)}>

      <LoginLeftSide status={status} />

      <LoginRightSide status={status} />

    </div>
  )
}

export default LoginPage
