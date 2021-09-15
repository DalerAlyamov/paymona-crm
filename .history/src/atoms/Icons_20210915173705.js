import React, { useState } from 'react'
import styles from '../scss/atom/Icons.module.scss'

const Icons = ({
 icon,
 clasName,
 active,
}) => {


  return (
    <div className={styles.root}>
      <button
       className={class clasName}>
        {icon}
      </button>
    </div>
  )
}

export default Icons
