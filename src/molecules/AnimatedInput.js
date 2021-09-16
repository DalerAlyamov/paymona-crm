import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/AnimatedInput.module.scss'

const AnimatedInput = ({
  className='',
  value='',
  setValue = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onKeyPress = () => {}
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      
      

    </div>
  )
}

export default AnimatedInput
