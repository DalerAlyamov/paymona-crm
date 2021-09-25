import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/DropdownInputLabel.module.scss'

const DropdownInputLabel = ({
  arrow=null,
  className='',
  active=false,
  open=false,
  error=false,
  defaultStatus=false,
  children='',
  onClick=()=>{}
}) => {

  return (
    <button
      onClick={onClick} 
      className={classNames(
        className, 
        styles.root,
        active && styles.active, 
        open && styles.open, 
        arrow !== null && styles.hasArrow, 
        error && styles.error,
        defaultStatus && styles.defaultStatus
      )}
    >
      {children}
      {arrow !== null && 
        <div className={styles.arrow}>
          {arrow}
        </div>
      }
    </button>
  )
}

export default DropdownInputLabel
