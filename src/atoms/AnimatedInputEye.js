import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/AnimatedInputEye.module.scss'
import { Visibility, VisibilityOff } from '../icons'

const AnimatedInputEye = ({
  className='',
  onClick=()=>{},
  visibility=true
}) => {

  return (
    <span
      className={classNames(
        className,
        styles.root
      )}
      onClick={onClick}
    >
      {visibility ? <VisibilityOff /> : <Visibility />}
    </span>
  )
}

export default AnimatedInputEye
