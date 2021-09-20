import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../atoms'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import styles from '../scss/molecules/FooterPanelInPopup.module.scss'
const FooterPanelInPopup = () => {

  const dispatch = useDispatch()

  return (
    <div>
        <Wrap 
        className={styles.added}
        gap={24}>
          <Button
            type='outlined'
            onClick={() => {dispatch(closePopup())}}
          >
            {}
          </Button>
          <Button>
            Добавить
          </Button>

        </Wrap>
    </div>
  )
}

export default FooterPanelInPopup
