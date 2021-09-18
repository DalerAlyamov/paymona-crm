import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TopbarUserAvatar.module.scss'
import { Person } from '../icons'

const TopbarUserAvatar = ({
  className=''
}) => {

  return (
    <div className={classNames(className, styles.root)}> 
      <Person size={60} />
    </div>
  )
}

export default TopbarUserAvatar
