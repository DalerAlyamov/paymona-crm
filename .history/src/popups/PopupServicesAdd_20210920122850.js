import classNames from 'classnames'
import React from 'react'
import TopPanelInPopup from '../molecules/TopPanelInPopup'
import styles from '../scss/popups/PopupServicesAdd.module.scss'
const PopupServicesAdd = ({
  className,

}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <TopPanelInPopup/>
      Wrap
    </div>
  )
}

export default PopupServicesAdd
