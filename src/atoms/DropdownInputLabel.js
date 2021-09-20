import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/DropdownInputLabel.module.scss'

const DropdownInputLabel = ({
  className='',
  active=false,
  error=false,
  children=<></>,
  onClick=()=>{}
}) => {

  return (
    <button
      onClick={onClick} 
      className={classNames(
        className, 
        styles.root,
        active && styles.active, 
        error && styles.error 
      )}
    >
      {children}
    </button>
  )
}

export default DropdownInputLabel
