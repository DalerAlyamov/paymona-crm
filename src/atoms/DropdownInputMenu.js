import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/DropdownInputMenu.module.scss'

const DropdownInputMenu = ({
  className='',
  children=<></>
}) => {

  return (
    <div className={classNames(className, styles.root)}>
      {children}
    </div>
  )
}

export default DropdownInputMenu
