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

      <div className={styles.main}>

        <Wrap
          spaceBetween
          alignCenter
        >
          <Wrap>
            <span>Отправитель:</span>
            <span>Tcell</span>
          </Wrap>
          <Wrap>
            <span>Отправитель:</span>
            <span>Аналитика</span>
          </Wrap>
          <Wrap>
            <span>Продукт:</span>
            <span>Tcell</span>
          </Wrap>
        </Wrap>

      </div>

    </div>
  )
}

export default PopupFitback
