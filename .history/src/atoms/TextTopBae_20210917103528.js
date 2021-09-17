import React from 'react'
import styles from '../scss/atoms/TextTopBar.module.scss'
const TextTopBae = text => {
  return (
    <div>
      <span className={styles.title}>
        {text}
      </span>
    </div>
  )
}

export default TextTopBae
