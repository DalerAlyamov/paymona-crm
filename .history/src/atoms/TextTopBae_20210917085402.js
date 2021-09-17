import React from 'react'
import styles from '../scss/atoms/TextTopBae.module.scss'
const TextTopBae = text => {
  return (
    <div>
      <span className={styles.tex}>
        {text}
      </span>
    </div>
  )
}

export default TextTopBae
