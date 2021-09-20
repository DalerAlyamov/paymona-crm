import React from 'react'
import styles from '../scss/molecules/TopPanelInPopup.module.scss'

const TopPanelInPopup = ({
  title=''
}) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>
        {title}
      </span>
    </div>
  )
}

export default TopPanelInPopup
