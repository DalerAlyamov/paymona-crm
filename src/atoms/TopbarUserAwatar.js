import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TopbarUserAwatar.module.scss'
import { Person } from '../icons'

const TopbarUserAwatar = ({
  className=''
}) => {

  return (
    <div className={classNames(className, styles.root)}> 
      <Person size={60} />
    </div>
  )
}

export default TopbarUserAwatar
