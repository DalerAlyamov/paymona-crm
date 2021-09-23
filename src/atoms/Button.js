import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/Button.module.scss'

const Button = React.forwardRef(({
  className='',
  children='',
  disabled=false,
  active=false,
  small=false,
  circle=false,
  beforeIcon=null,
  afterIcon=null,
  type='contained',
  onClick=()=>{}
}, ref) => {

  const handleClick = () => {
    !disabled && onClick()
  }

  return (
    <button 
      ref={ref}
      className={classNames(
        className, 
        styles.root,
        styles[type],
        active && styles.active,
        disabled && styles.disabled,
        small && styles.small,
        children === '' && styles.clean_icon,
        circle && styles.circle
      )}
      onClick={handleClick}
    >
      <div className={styles.before_icon}>
        {beforeIcon}
      </div>
      {children}
      <div className={styles.after_icon}>
        {afterIcon}
      </div>
    </button>
  )
})

export default Button
