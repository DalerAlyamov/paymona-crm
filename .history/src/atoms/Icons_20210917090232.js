import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/Icons.module.scss'

const Icons = ({
 icon,
 clasName,
 active,
 rotate
}) => {


  return (
    <div className={styles.root}>
      <button
        className={classNames(
          clasName, 
          rotate && styles.rotate,
          !active && styles.dis
        )}
      >
        {icon}
      </button>
    </div>
  )
}

export default Icons
