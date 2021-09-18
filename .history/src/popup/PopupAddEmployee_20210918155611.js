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
          flex
          gap={30}

        >
          
          <AnimatedInput
            placeholder='Имя' 
            width={240} 
          />
          <AnimatedInput
            placeholder='Фамилия' 
            width={240} 
          />
        </Wrap>
      </div>
    </div>
  )
}

export default PopupAddEmployee
