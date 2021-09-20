import React from 'react'
import styles from '../scss/molecules/FooterPanelInPopup.module.scss'
import { useDispatch } from 'react-redux'
import { Button } from '../atoms'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'

const FooterPanelInPopup = ({
  btn1='',
  btn2='',
  onClick=()=>{}
}) => {

  const dispatch = useDispatch()

  return (
    <div>
        <Wrap 
          className={styles.added}
          gap={24}
        >
          {btn2 !== '' &&
            <Button
              type='outlined'
              onClick={() => {dispatch(closePopup())}}
            >
              {btn2}
            </Button>
          }
          {btn1 !== '' && 
            <Button onClick={onClick}>
              {btn1}
            </Button>
          }
        </Wrap>
    </div>
  )
}

export default FooterPanelInPopup
