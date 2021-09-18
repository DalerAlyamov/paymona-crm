import React from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import { AnimatedInput } from '../molecules'
import { Wrap } from '../organisms'
const PopupAddEmployee = ({
  title

}) => {

  return (
    <div className={styles.root}>
      <span className={styles.title}>
        {title}
      </span>
      <div className={styles.survey}>
        <Wrap
          children={
            <>
            <AnimatedInput
              placeholder='Имя' 
              width={240} 
            />
            <AnimatedInput
              placeholder='Фамилия' 
              width={240} 
            />
         
            </>
          }
        />
      </div>
    </div>
  )
}

export default PopupAddEmployee
