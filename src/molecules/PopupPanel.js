import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/PopupPanel.module.scss'
import { CloseSingle } from '../icons'
import { useDispatch } from 'react-redux'
import { closePopup } from '../redux/actions/popupActions'

const PopupPanel = ({
  minWidth=500,
  minHeight=500,
  className='',
  children=''
}) => {

  const dispatch = useDispatch()

  return (
    <div 
      className={classNames(
        className, 
        styles.root
      )} 
      style={{ minWidth: minWidth+'px', minHeight: minHeight+'px' }}
    >
      <button className={styles.close} onClick={() => dispatch(closePopup())}>
        <CloseSingle size={20} />
      </button>

      {children}
    </div>
  )
}

export default PopupPanel
