import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPage.module.scss'
import { LoginLeftPan } from '../atoms'
import { LoginRightPan } from './'

const LoginPage = ({
  className,
  isLogged
}) => {

  return (
    <div className={classNames(className, styles.root)}>

      <LoginLeftPan status={isLogged ? 'open' : 'close' } />

      <LoginRightPan status={isLogged ? 'open' : 'close' } />
      
    </div>
  )
}

export default LoginPage
