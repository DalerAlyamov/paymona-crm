import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/LoginTitle.module.scss'

const LoginTitle = ({
  className,
  children
}) => {
  return (
    <span className={classNames(className, styles.root)}>
      {children}
    </span>
  )
}

export default LoginTitle
