import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPage.module.scss'
import { LoginLeftPan } from '../molecules'

const LoginPage = ({
  className,
  isLogged
}) => {

  return (
    <div className={classNames(className, styles.root)}>
      
      <LoginLeftPan />

    </div>
  )
}

export default LoginPage
