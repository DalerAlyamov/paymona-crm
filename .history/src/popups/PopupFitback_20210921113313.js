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
         <span>Отправитель:</span>
         <span>Продукт:</span>
         <span>Дата отправки:</span>
        </div>
       </Wrap>
    </div>
  )
}

export default PopupFitback
