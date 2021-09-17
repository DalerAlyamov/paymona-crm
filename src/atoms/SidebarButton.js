import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/SidebarButton.module.scss'
 
const SidebarButton = React.forwardRef(({
  className='',
  children=<></>,
  disabled=false,
  active=false,
  beforeIcon=null,
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
        active && styles.active,
        disabled && styles.disabled
      )}
      onClick={handleClick}
    >
      <div className={styles.before_icon}>
        {beforeIcon}
      </div>
      {children}
    </button>
  )
})

export default SidebarButton
