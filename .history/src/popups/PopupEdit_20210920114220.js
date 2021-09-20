import classNames from 'classnames'
import React from 'react'
import styles from '../scss/popups/PopupEdit.module.scss'
const PopupEdit = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <Top
    </div>
  )
}

export default PopupEdit
