import React from 'react'
import classNames from 'classnames'
import styles from '../scss/popups/PopupInfoText.module.scss'
import { FooterPanelInPopup } from '../molecules'
import { useDispatch } from 'react-redux'
import { closePopup } from '../redux/actions/popupActions'

const PopupInfoText = ({
  className='',
  text='',
  btn1Text='Хорошо',
  btn2Text='',
  onBtn1Click=()=>{}
}) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={classNames(className, styles.root)}>
        {text}
      </div>
      <FooterPanelInPopup 
        btn1={btn1Text}
        btn2={btn2Text}
        onClick={() => {
          onBtn1Click()
          dispatch(closePopup())
        }}
      />
    </>
  )
}

export default PopupInfoText
