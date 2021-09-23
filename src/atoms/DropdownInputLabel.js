import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/DropdownInputLabel.module.scss'

const DropdownInputLabel = ({
  arrow=null,
  className='',
  active=false,
  error=false,
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
        arrow !== null && styles.hasArrow, 
        error && styles.error 
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
