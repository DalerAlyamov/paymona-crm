import classNames from 'classnames'
import React from 'react'
import { AnimatedInput } from '../molecules'
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
        <div className={styles.services}>
        <Wrap
          flex
          gap={24}
          alignCenter
        >
          <AnimatedInput
            placeholder='Наименование'
            
          />
        </Wrap>

        </div>
    </div>
  )
}

export default PopupServicesAdd
