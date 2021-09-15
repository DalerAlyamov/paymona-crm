import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginRightPan.module.scss'
import ColoredLogo from '../atoms/ColoredLogo'

const LoginRightPan = ({
  className,
  status
}) => {

  return (
    <div className={classNames(className, styles.root)}>

      <ColoredLogo hasWhiteBackground isCircle />

    </div>
  )
}

export default LoginRightPan
