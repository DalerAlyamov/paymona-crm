import React, { useState } from 'react'
import styles from '../scss/atom/Icons.module.scss'

const Icons = ({
 icon,
 className,
 active,
}) => {


  return (
    <div className={styles.root}>
      {icon && <Icon}
    </div>
  )
}

export default Icons
