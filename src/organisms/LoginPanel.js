import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPanel.module.scss'
import { LoginTitle } from '../atoms'

const LoginPanel = ({
  className,
  title
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <LoginTitle>{title}</LoginTitle>
    </div>
  )
}

export default LoginPanel
