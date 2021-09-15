import React, { useState } from 'react'
import styles from '../scss/atom/Icons.module.scss'

const Icons = ({
 icon,
 className,
 active,
}) => {


  return (
    <div className={styles.root}>
      {icon }
    </div>
  )
}

export default Icons
