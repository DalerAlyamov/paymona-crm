import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TopbarUserAvatar.module.scss'
import { useSelector } from 'react-redux'

const TopbarUserAvatar = ({
  className=''
}) => {

  const user = useSelector(state => state.user)

  return (
    <div className={classNames(className, styles.root)}> 
      <img src={user.avatar} alt="" className={styles.img} />
    </div>
  )
}

export default TopbarUserAvatar
