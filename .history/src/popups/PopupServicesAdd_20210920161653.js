import classNames from 'classnames'
import React from 'react'
import { AnimatedInput } from '../molecules'
import FooterPanelInPopup from '../molecules/FooterPanelInPopup'
import TopPanelInPopup from '../molecules/TopPanelInPopup'
import { Wrap } from '../organisms'
import styles from '../scss/popups/PopupServices.module.scss'
const PopupServicesAdd = ({
  className,

}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <TopPanelInPopup
        title='Добавить услугу'
      />
        <Wrap
          flex
          justifyCenter
          alignCenter
          className={styles.padding}
        >
          <AnimatedInput
            placeholder='Наименование'
            width={346}
          />
        </Wrap>

      <FooterPanelInPopup
          btn1=''
          btn1=''
          btn2='Отмена'
          onClick={() => setData=() => {}}
      />

    </div>
  )
}

export default PopupServicesAdd
