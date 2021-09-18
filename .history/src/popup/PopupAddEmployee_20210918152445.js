import React from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import { AnimatedInput } from '../molecules'
const PopupAddEmployee = ({
  title

}) => {

  return (
    <div className={styles.root}>
      <span className={styles.title}>
        {title}
      </span>
      <div className={styles.survey}>
        <AnimatedInput
        
        />
      </div>
    </div>
  )
}

export default PopupAddEmployee
