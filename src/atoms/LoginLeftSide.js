import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/LoginLeftSide.module.scss'

const LoginLeftSide = ({
  className='',
  status='close'
}) => {
  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        styles[status] 
      )}
    >
      <div className={styles.blue_space} />
      <svg viewBox="0 0 128 1024" fill="#486BE4" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path 
          d="M0 0H128C128 146.927 128 387.059 128 387.059C80.8157 385 2.50986 425 2.50986 512C2.50986 599 81.8196 639 128 637C128 753.904 128 877.097 128 1024H0V0Z" 
          fill="#486BE4"
        />
      </svg>

    </div>
  )
}

export default LoginLeftSide
