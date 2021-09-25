import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../scss/organisms/Popup.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { PopupPanel } from '../molecules'
import { closePopup } from '../redux/actions/popupActions'

const Popup = ({
  className
}) => {

  const dispatch = useDispatch()

  const panelRef = useRef(null)

  const popup = useSelector(state => state.popup)

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const [coverHeight, setCoverHeight] = useState(0)

  useEffect(() => {
    if (!popup.active)
      setTimeout(() => {
        setOpen(false)
      }, 250)
    else
      setOpen(true)
  }, [dispatch, popup.active])

  useEffect(() => {
    if (!popup.content)
      setTimeout(() => {
        setContent('')
      }, 250)
    else
      setContent(popup.content)
  }, [popup.content])

  useEffect(() => {
    if (!panelRef.current) return 
    setTimeout(() => {
      setCoverHeight(Math.max(panelRef.current.offsetHeight + 200 * 2, window.innerHeight))
    }, 100)
  }, [panelRef, open, popup])

  if (open)
    return (
      <div 
        className={classNames(
          className, 
          styles.root,
          popup.active && styles['root--open'],
          !popup.active && styles['root--close']
        )}
      >

        <div 
          className={styles.cover} 
          onClick={() => dispatch(closePopup())}
          style={{ minHeight: coverHeight + 'px' }} 
        />

        <div className={styles.panel} ref={panelRef}>
          <PopupPanel minHeight={popup.minHeight} minWidth={popup.minWidth}>
            {content}
          </PopupPanel>
        </div>
      </div>
    )
  return <></>
}

export default Popup
