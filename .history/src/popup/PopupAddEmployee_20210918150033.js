import React from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
const PopupAddEmployee = ({
  title

}) => {

  return (
    <div className={styles.root}>
      <span className={styles.title}>
       {title}
      </span>
    </div>
  )
}

export default PopupAddEmployee
