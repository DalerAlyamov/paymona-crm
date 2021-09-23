import React from 'react'
import classNames from 'classnames'
import styles from '../scss/popups/PopupInfoText.module.scss'
import { FooterPanelInPopup } from '../molecules'
import { useDispatch } from 'react-redux'
import { closePopup } from '../redux/actions/popupActions'

const PopupInfoText = ({
  className='',
  text=''
}) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={classNames(className, styles.root)}>
        {text}
      </div>
      <FooterPanelInPopup 
        btn1='Хорошо'
        onClick={() => dispatch(closePopup())}
      />
    </>
  )
}

export default PopupInfoText
