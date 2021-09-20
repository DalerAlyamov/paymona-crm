import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TopbarUserPanelLabel.module.scss'
import { useSelector } from 'react-redux'

const TopbarUserPanelLabel = ({
  className='',
  active=false,
  onClick=()=>{}
}) => {

  const user = useSelector(state => state.user)

  return (
    <button 
      className={classNames(
        className, 
        styles.root,
        active && styles.active
      )} 
      onClick={onClick}
    >
      <img src={user.avatar} alt="" className={styles.img} />
    </button>
  )
}

export default TopbarUserPanelLabel
