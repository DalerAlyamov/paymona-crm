import React from 'react'
import styles from '../scss/molecules/TopPanelInPopup.module.scss'
import { PopupAddEmployee } from '../popups'
const TopPanelInPopup = title => {
  return (
    <div>
      <span className={styles.title}>
        {title}
      </span>
    </div>
  )
}

export default TopPanelInPopup
