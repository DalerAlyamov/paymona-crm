import React from 'react'
import { TopPanelInPopup } from '../molecules'
import DropdownInput from '../molecules/DropDownInput'
import { Wrap } from '../organisms'
import styles from '../scss/popups/PopupFitBack.module.scss'
const PopupFitback = ({

}) => {
  return (
    <div className={styles.root}>
       <TopPanelInPopup
          title='Отзыв'       
       />

      <div className={styles.grid}>
        <span className={styles.title}>Отправитель:</span>
        <span className={styles.title}>Продукт:</span>
        <span className={styles.title}>Дата отправки:</span>
        <span className={styles.title2}>Tcell</span>
        <span className={styles.title2}>Аналитика</span>
        <span className={styles.title2}>12/05/2021</span>
      </div>
      
      <Wrap
        width
      >
        <span>Статус</span>
        <DropdownInput/>
      </Wrap>

    </div>
  )
}

export default PopupFitback
