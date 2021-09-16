import React from 'react'
import styles from '../scss/atoms/ColoredLogo.module.scss'
import { LogoColored } from '../icons'
import classNames from 'classnames'

const ColoredLogo = ({
  className='',
  hasWhiteBackground=false,
  size=24,
  padding=0,
  isCircle=false
}) => {
  return (
    <div 
      className={classNames(
        className, 
        styles.root, 
        hasWhiteBackground && styles['root--with_background'],
        isCircle && styles['root--circle_background']
      )}
      style={{ padding }}
    >
      <LogoColored size={size} />
    </div>
  )
}

export default ColoredLogo
