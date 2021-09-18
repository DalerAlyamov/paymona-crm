import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/PopupPanel.module.scss'
import { CloseSingle } from '../icons'
import { useDispatch } from 'react-redux'
import { closePopup } from '../redux/actions/popupActions'

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
        <CloseSingle size={20} />
      </button>

      {children}
    </div>
  )
}

export default PopupPanel
