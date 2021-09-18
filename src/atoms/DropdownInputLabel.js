import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/DropdownInputLabel.module.scss'

const DropdownInputLabel = ({
  className='',
  children=<></>
}) => {

  return (
    <div className={classNames(className, styles.root)}>
      {children}
    </div>
  )
}

export default DropdownInputLabel
