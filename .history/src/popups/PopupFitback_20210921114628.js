import React from 'react'
import { TopPanelInPopup } from '../molecules'
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
         <span className={styles.title}>Tcell</span>
         <span className={styles.title}>Продукт:</span>
         <span className={styles.title}>Дата отправки:</span>
        </div>
    </div>
  )
}

export default PopupFitback
