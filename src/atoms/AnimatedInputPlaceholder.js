import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/AnimatedInputPlaceholder.module.scss'

const AnimatedInputPlaceholder = ({
  className='',
  children=<></>,
  active=false
}) => {
  return (
    <span
      className={classNames(
        className, 
        styles.root,
        active && styles.root_active
      )}
    >
      {children}
    </span>
  )
}

export default AnimatedInputPlaceholder
