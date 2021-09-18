import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/PopupPanel.module.scss'
import { Close } from '../../'
import { useDispatch } from 'react-redux'
import { closePopup } from '../../../redux/actions/popupActions'

const PopupPanel = ({
  minWidth,
  minHeight,
  className,
  children
}) => {

  const dispatch = useDispatch()

  return (
    <div 
      className={classNames(
        className, 
        styles.root
      )} 
      style={{ minWidth, minHeight }}
    >
      <button className={styles.close} onClick={() => dispatch(closePopup())}>
        <Close size={20} />
      </button>

      {children}
    </div>
  )
}

export default PopupPanel
