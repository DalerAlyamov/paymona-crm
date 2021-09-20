import React from 'react'
import styles from '../scss/molecules/TopPanelInPopup.module.scss'

const TopPanelInPopup = ({
  title=''
}) => {
  return (
    <div class>
      <span className={styles.title}>
        {title}
      </span>
    </div>
  )
}

export default TopPanelInPopup
