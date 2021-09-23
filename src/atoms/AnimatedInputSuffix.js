import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/AnimatedInputSuffix.module.scss'

const AnimatedInputSuffix = ({
  className='',
  children=''
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      {children}
    </div>
  )
}

export default AnimatedInputSuffix
