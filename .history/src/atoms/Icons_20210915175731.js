import classNames from 'classnames'
import React, { useState } from 'react'
import styles from '../scss/atom/Icons.module.scss'

const Icons = ({
 icon,
 clasName,
 active,
 rotate
}) => {


  return (
    <div className={styles.root}>
      <button
       className={classNames(clasName, ro ? styles.rotate : null)}>
        {icon}
      </button>
    </div>
  )
}

export default Icons
