import classNames from 'classnames'
import React from 'react'
import TopPanelInPopup from '../molecules/TopPanelInPopup'
import styles from '../scss/popups/PopupEdit.module.scss'
const PopupEdit = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <TopPanelInPopup
        tit
      />
    </div>
  )
}

export default PopupEdit
