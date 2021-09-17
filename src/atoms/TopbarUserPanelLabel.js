import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TopbarUserPanelLabel.module.scss'
import { Person } from '../icons'

const TopbarUserPanelLabel = ({
  className='',
  active=false,
  onClick=()=>{}
}) => {

  return (
    <button 
      className={classNames(
        className, 
        styles.root,
        active && styles.active
      )} 
      onClick={onClick}
    >
      <Person />
    </button>
  )
}

export default TopbarUserPanelLabel
