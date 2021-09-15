import React from 'react'
import styles from '../scss/atoms/LoginLeftPan.module.scss'

const LoginLeftPan = ({
  className,
  status
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.blue_space} />
      <svg viewBox="0 0 128 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path 
          d="M0 0H127.5C127.5 146.927 127.5 387.059 127.5 387.059C80.5 385 2.50006 425 2.50006 512C2.50006 599 81.5 639 127.5 637C127.5 753.904 127.5 877.097 127.5 1024H0V0Z" 
          fill="#486BE4"
        />
      </svg>

    </div>
  )
}

export default LoginLeftPan
