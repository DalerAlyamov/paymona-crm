import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/ServiceLabel.module.scss'
import { ArrowHadSmallBottom, Edit } from '../icons'
import { useDispatch } from 'react-redux'
import { openPopup } from '../redux/actions/popupActions'
import { PopupEditProduct } from '../popups'

const ServiceLabel = ({
  id=0,
  setData=()=>{},
  className='',
  children='',
  open=false,
  onClick=()=>{}
}) => {

  const dispatch = useDispatch()

  return (
    <div className={classNames(className, styles.root)}>

      <button onClick={() => {dispatch(openPopup(<PopupEditProduct setData={setData} id={id} />))}} className={styles.edit_btn}>
        Наименование  
        <div className={styles.edit_icon}>
          <Edit size={18} />
        </div>
      </button>
      
      <div className={styles.label} >

        {children}

        <button
          onClick={onClick} 
          className={classNames(
            styles.arrow, 
            open && styles.arrow__rotate
          )}
        >
          <ArrowHadSmallBottom />
        </button>

      </div>

    </div>
  )
}

export default ServiceLabel
