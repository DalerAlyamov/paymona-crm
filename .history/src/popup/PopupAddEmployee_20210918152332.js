import React from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import 
const PopupAddEmployee = ({
  title

}) => {

  return (
    <div className={styles.root}>
      <span className={styles.title}>
        {title}
      </span>
      <div className={styles.survey}>
        
      </div>
    </div>
  )
}

export default PopupAddEmployee
