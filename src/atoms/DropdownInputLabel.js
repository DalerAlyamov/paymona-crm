import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/DropdownInputLabel.module.scss'

const DropdownInputLabel = ({
  className='',
  active=false,
  children=<></>,
  onClick=()=>{}
}) => {

  return (
    <button
      onClick={onClick} 
      className={classNames(
        className, 
        styles.root,
        active && styles.active 
      )}
    >
      {children}
    </button>
  )
}

export default DropdownInputLabel
